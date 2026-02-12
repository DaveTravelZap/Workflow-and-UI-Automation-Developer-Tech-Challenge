export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const CHALLENGES: Challenge[] = [
  {
    id: 'basic-form',
    title: 'Basic Contact Form',
    description: 'Create a form with a Heading, two Input fields (First Name, Last Name), and a Primary Button.',
    difficulty: 'easy',
  },
  {
    id: 'alert-feedback',
    title: 'Success Feedback',
    description: 'Use an Alert component to show a success message after a "Submit" button is clicked. Use Flex to align them.',
    difficulty: 'easy',
  },
  {
    id: 'complex-layout',
    title: 'CRM Card Sidebar',
    description: 'Replicate a CRM card sidebar with a Stack of sections, each containing a Heading and some Text or Badges.',
    difficulty: 'medium',
  }
];
