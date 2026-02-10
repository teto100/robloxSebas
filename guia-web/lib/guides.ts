import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const guidesDirectory = path.join(process.cwd(), '../contexto');

export interface GuideStep {
  id: string;
  title: string;
  content: string;
  level: number;
  emoji: string;
}

export interface Guide {
  id: string;
  title: string;
  description: string;
  steps: GuideStep[];
}

export function getGuides(): Guide[] {
  const files = fs.readdirSync(guidesDirectory);
  const mdFiles = files.filter(f => f.endsWith('.md') && !f.includes('perfil'));
  
  const guides = mdFiles.map(filename => {
    const filePath = path.join(guidesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContents);
    
    const steps = parseSteps(content);
    
    return {
      id: filename.replace('.md', ''),
      title: filename.includes('detallada') ? 'Guía Detallada' : 'Guía Básica',
      description: filename.includes('detallada') 
        ? 'Guía completa con explicaciones profundas'
        : 'Guía rápida para empezar',
      steps
    };
  });
  
  return guides.sort((a, b) => a.title.includes('Básica') ? -1 : 1);
}

function parseSteps(content: string): GuideStep[] {
  const lines = content.split('\n');
  const steps: GuideStep[] = [];
  let currentStep: Partial<GuideStep> | null = null;
  let stepContent: string[] = [];
  let stepCounter = 0;

  for (const line of lines) {
    if (line.match(/^##\s+🟢|^##\s+🟡|^##\s+🟠|^##\s+🔴/)) {
      if (currentStep) {
        currentStep.content = stepContent.join('\n').trim();
        steps.push(currentStep as GuideStep);
      }
      
      const emoji = line.match(/[🟢🟡🟠🔴]/)?.[0] || '📝';
      const title = line.replace(/^##\s+/, '').trim();
      
      currentStep = {
        id: `step-${++stepCounter}`,
        title,
        level: stepCounter,
        emoji,
        content: ''
      };
      stepContent = [];
    } else if (line.match(/^###\s+/)) {
      if (currentStep) {
        stepContent.push(line);
      }
    } else if (currentStep) {
      stepContent.push(line);
    }
  }

  if (currentStep) {
    currentStep.content = stepContent.join('\n').trim();
    steps.push(currentStep as GuideStep);
  }

  return steps;
}

export function getGuideById(id: string): Guide | null {
  const guides = getGuides();
  return guides.find(g => g.id === id) || null;
}
