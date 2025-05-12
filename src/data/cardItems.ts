import { RecentBlogCardProps } from '@/app/blog/components/RecentBlogCard';
import testingImage from '@/utils/images/profile.png';

let convertedDateTime = Date.now();
let today = new Date(convertedDateTime);

export const cardItems: RecentBlogCardProps[] = [
  {
    image: testingImage.src,
    date: today.toDateString(),
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    title: 'UX review presentations',
    tags: [{ tagName: 'web' }, { tagName: 'backend' }, { tagName: 'mobile' }],
  },
  {
    image: testingImage.src,
    date: today.toDateString(),
    description:
      'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...',
    title: 'Migrating to Linear 101',
    tags: [{ tagName: 'mobile' }, { tagName: 'web' }, { tagName: 'backend' }],
  },
  {
    image: testingImage.src,
    date: today.toDateString(),
    description:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
    title: 'Building your API Stack',
    tags: [{ tagName: 'backend' }, { tagName: 'web' }, { tagName: 'mobile' }],
  },
    {
    image: testingImage.src,
    date: today.toDateString(),
    description:
      'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...',
    title: 'Migrating to Linear 101',
    tags: [{ tagName: 'mobile' }, { tagName: 'web' }, { tagName: 'backend' }],
  },
  {
    image: testingImage.src,
    date: today.toDateString(),
    description:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
    title: 'Building your API Stack',
    tags: [{ tagName: 'backend' }, { tagName: 'web' }, { tagName: 'mobile' }],
  },
    {
    image: testingImage.src,
    date: today.toDateString(),
    description:
      'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...',
    title: 'Migrating to Linear 101',
    tags: [{ tagName: 'mobile' }, { tagName: 'web' }, { tagName: 'backend' }],
  },
  {
    image: testingImage.src,
    date: today.toDateString(),
    description:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
    title: 'Building your API Stack',
    tags: [{ tagName: 'backend' }, { tagName: 'web' }, { tagName: 'mobile' }],
  },
];
