import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface PropsType {
  title: string;
  description: string;
  open: boolean;
  toggle: () => void;
}

const AccordionItem = ({ title, description, open, toggle }: PropsType) => {
  return (
    <div className="accordionItem" onClick={toggle}>
      <div className="accordionItem_flex">
        {title} {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      <div className={`desc ${open ? 'show' : ''}`}>
        <span className="hidden">{description}</span>
      </div>
    </div>
  );
};

export default AccordionItem;
