import s from '@/entities/product/ui/ProductAccordion/ProductAccordion.module.scss';

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
          <p className={s.descriptionTitle}>{title}</p>

          <ul className={s.descriptionList}>
            {listItems.map((item, itemIndex) => (
              <li className={s.descriptionListItem} key={itemIndex}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return <p key={index}>{block}</p>;
  });
};
