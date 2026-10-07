export const renderDescription = (text: string) => {
  if (!text) return null;

  const blocks = text
    .split('\n\n')
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block, index) => {
    const lines = block
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);

    const title = lines[0];
    const listItems = lines
      .slice(1)
      .filter((line) => line.startsWith('•'))
      .map((line) => line.replace(/^•\s*/, ''));

    if (listItems.length > 0) {
      return (
        <div key={index}>
          <p>{title}</p>

          <ul>
            {listItems.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }

    return <p key={index}>{block}</p>;
  });
};
