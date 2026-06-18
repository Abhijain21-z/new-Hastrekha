'use client';

import { useLanguage } from '@/lib/language-context';
import { Blog } from '@/lib/blogs-data';

interface BlogPostClientProps {
  blog: Blog;
}

export function BlogPostClient({ blog }: BlogPostClientProps) {
  const { language } = useLanguage();

  // Get content based on language
  const title = blog.title[language as keyof typeof blog.title];
  const content = blog.content[language as keyof typeof blog.content];

  // Parse content and format it with proper spacing and styling
  const contentSections = content.split('\n\n');

  return (
    <article className="prose prose-lg max-w-none">
      {contentSections.map((section, index) => {
        // Check if section is a heading (contains ### or #)
        if (section.startsWith('###')) {
          const headingText = section.replace('###', '').trim();
          return (
            <h3 key={index} className="mb-4 mt-8 text-2xl font-bold text-foreground">
              {headingText}
            </h3>
          );
        }

        if (section.startsWith('##')) {
          const headingText = section.replace('##', '').trim();
          return (
            <h2 key={index} className="mb-4 mt-8 text-3xl font-bold text-foreground">
              {headingText}
            </h2>
          );
        }

        if (section.startsWith('#')) {
          const headingText = section.replace('#', '').trim();
          return (
            <h1 key={index} className="mb-4 mt-8 text-4xl font-bold text-foreground">
              {headingText}
            </h1>
          );
        }

        // Check if section is a list
        if (section.includes('- ') || section.includes('* ')) {
          const listItems = section
            .split('\n')
            .filter((item) => item.trim().startsWith('-') || item.trim().startsWith('*'))
            .map((item) => item.replace(/^[-*]\s+/, '').trim());

          return (
            <ul key={index} className="my-4 list-inside list-disc space-y-2 text-foreground">
              {listItems.map((item, itemIndex) => (
                <li key={itemIndex} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        // Regular paragraph
        return (
          <p key={index} className="mb-6 leading-relaxed text-foreground">
            {section}
          </p>
        );
      })}

      {/* Language Notice */}
      {language === 'hi' && (
        <div className="mt-12 rounded-lg border-l-4 border-primary bg-primary/10 p-4">
          <p className="text-sm text-muted-foreground">
            यह सामग्री हिंदी में अनुवादित है। अंग्रेजी में पढ़ने के लिए भाषा बदलें।
          </p>
        </div>
      )}

      {language === 'en' && (
        <div className="mt-12 rounded-lg border-l-4 border-primary bg-primary/10 p-4">
          <p className="text-sm text-muted-foreground">
            Read this content in Hindi by changing the language preference in the navigation menu.
          </p>
        </div>
      )}
    </article>
  );
}
