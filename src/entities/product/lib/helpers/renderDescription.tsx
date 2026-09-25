export const renderDescription = (text: string) => {
  const parts = text
    .split('•')
    .map((item) => item.trim())
    .filter(Boolean);

  const sections: {
    text?: string;
    title?: string;
    items: string[];
  }[] = [];

  parts.forEach((part) => {
    if (part.includes(':')) {
      const colonIndex = part.indexOf(':');
      const beforeColon = part.slice(0, colonIndex).trim();

      const lastSentenceEnd = Math.max(
        beforeColon.lastIndexOf('.'),
        beforeColon.lastIndexOf('!'),
        beforeColon.lastIndexOf('?'),
      );

      const paragraph =
        lastSentenceEnd !== -1
          ? beforeColon.slice(0, lastSentenceEnd + 1).trim()
          : '';

      const title = beforeColon.slice(lastSentenceEnd + 1).trim() + ':';

      sections.push({
        text: paragraph,
        title,
        items: [],
      });
    } else {
      sections.at(-1)?.items.push(part);
    }
  });

  return sections.map(({ text, title, items }, index) => (
    <div key={index}>
      {text && <p>{text}</p>}

      {title && <p>{title}</p>}

      {items.length > 0 && (
        <ul>
          {items.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  ));
};
