import cn from 'clsx';
import { ReactNode } from 'react';

import { Element, MyForms } from '@/types/NettskjemaAPI';

import PDFBlock from '../layout/PDFBlock';
import PDFPageBreak from '../layout/PDFPageBreak';
import { addSpaceBetweenElements } from '../util';
import style from './templates.module.scss';

const ElementTitle = ({ element }: { element: Element }) => (
  <div
    className={style.title}
    dangerouslySetInnerHTML={{
      __html: element.text || '',
    }}
  />
);

const ElementDescription = ({ element }: { element: Element }) =>
  element.description ? (
    <div
      className={style.description}
      dangerouslySetInnerHTML={{
        __html: element.description,
      }}
    />
  ) : null;

const Accordion = (element: Element) => (
  <div>
    <ElementTitle element={element} />
    <ElementDescription element={element} />
  </div>
);

const TextField = (element: Element) => (
  <div>
    <ElementTitle element={element} />
    <ElementDescription element={element} />
    <div
      className={cn(
        style.box,
        element.elementType === 'QUESTION_MULTILINE' && style.tall,
      )}
    />
  </div>
);

const ElementComponents: Partial<
  Record<Element['elementType'], (element: Element) => ReactNode>
> = {
  PAGE_BREAK: () => <PDFPageBreak />,
  HEADING: (element: Element) => <ElementTitle element={element} />,
  TEXT: (element: Element) => <ElementDescription element={element} />,
  ACCORDION: Accordion,
  QUESTION: TextField,
  QUESTION_MULTILINE: TextField,
};
export const renderableElements = Object.keys(
  ElementComponents,
) as Element['elementType'][];

const FormTemplate = ({
  form,
  elements,
  onRenderCallback,
}: {
  form: MyForms | null;
  elements: Element[] | null;
  onRenderCallback: () => void;
}) => {
  if (!form || !elements) return <div ref={onRenderCallback} />;
  return (
    <>
      {addSpaceBetweenElements(
        elements
          .filter(({ elementType }) => renderableElements.includes(elementType))
          .map((element) => (
            <PDFBlock key={element.elementId}>
              {ElementComponents[element.elementType]?.(element)}
            </PDFBlock>
          )),
        24,
      )}
      <div ref={onRenderCallback} />
    </>
  );
};
export default FormTemplate;
