import { useState } from 'react';
import AccordionItem from './AccordionItem';

const accordionData = [
  {
    title: 'Accordion Item 1',
    content:
      'This is the content for accordion item 1. You can add any text or HTML here for accordion item 1. You can add any text or HTML here.',
  },
  {
    title: 'Accordion Item 2',
    content:
      'Content for cordion item 2 goes herecordion item 2 goes here accordion item 2 goes here.',
  },
  {
    title: 'Accordion Item 3',
    content:
      'Accordion item 3 content ordion item 3 content ordion item 3 content  can be placed here.',
  },
  {
    title: 'Accordion Item 4',
    content:
      'You can have more accordion u can have more accordion items with differ items with different content.',
  },
  {
    title: 'Accordion Item 5',
    content:
      'Fi Fifth accordion item content can be Fifth accordion item content can be fth accordion item content can be customized as needed.',
  },
];

const Accordion = () => {
  const [open, setOpen] = useState<boolean | number>(false);

  const toggle = (index: number) => {
    if (index === open) {
      return setOpen(false);
    }
    setOpen(index);
  };

  return (
    <div className="accordion_holder">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          description={item.content}
          open={index === open}
          toggle={() => toggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
