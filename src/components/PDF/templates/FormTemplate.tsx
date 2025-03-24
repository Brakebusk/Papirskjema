import cn from 'clsx';
import { ReactNode } from 'react';

import Flex from '@/components/Flex';
import { Element, MyForms } from '@/types/NettskjemaAPI';
import { ComponentSize, componentSize } from '@/utils/sizes';

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

const inputWidthMap: Partial<Record<Element['elementType'], ComponentSize>> = {
  QUESTION: 'M',
  QUESTION_MULTILINE: 'M',
  NUMBER: 'Mini',
  PHONE: 'XXS',
  USERNAME: 'XXS',
};

const TextField = (element: Element) => (
  <div>
    <ElementTitle element={element} />
    <ElementDescription element={element} />
    <div
      className={cn(
        style.box,
        element.elementType === 'QUESTION_MULTILINE' && style.tall,
      )}
      style={{
        width: componentSize[inputWidthMap[element.elementType] || 'XS'],
      }}
    />
  </div>
);

const MultipleChoice = (element: Element) => (
  <div>
    <ElementTitle element={element} />
    <ElementDescription element={element} />
    {element.elementType === 'CHECKBOX' ? (
      <p>
        Velg{' '}
        {element.maxSelectedAnswerOptions || 'så mange alternativer du vil'}
      </p>
    ) : (
      <p>Velg 1 alternativ</p>
    )}
    {addSpaceBetweenElements(
      element.answerOptions?.map((option) => (
        <div key={option.answerOptionId} className={style.option}>
          <div
            className={cn(
              style.optionBox,
              ['RADIO', 'SELECT'].includes(element.elementType) && style.radio,
            )}
          />
          <span
            dangerouslySetInnerHTML={{
              __html: option.text || '',
            }}
          />
        </div>
      )) ?? [],
      8,
    )}
  </div>
);

const Date = (element: Element) => {
  const showDate = element.dateFormat !== 'TIME';
  const showTime = element.dateFormat !== 'DATE';
  return (
    <div>
      <ElementTitle element={element} />
      <ElementDescription element={element} />
      <Flex align="center" columnGap={8}>
        {showDate && (
          <div>
            <div>Dato (dd.mm.åååå)</div>
            <div
              className={style.box}
              style={{ width: componentSize['XXS'] }}
            />
          </div>
        )}
        {showTime && (
          <div>
            <div>Tid (tt:mm)</div>
            <div
              className={style.box}
              style={{ width: componentSize['Mini'] }}
            />
          </div>
        )}
      </Flex>
    </div>
  );
};

const ElementComponents: Partial<
  Record<Element['elementType'], (element: Element) => ReactNode>
> = {
  PAGE_BREAK: () => <PDFPageBreak />,
  HEADING: (element: Element) => <ElementTitle element={element} />,
  TEXT: (element: Element) => <ElementDescription element={element} />,
  ACCORDION: Accordion,
  QUESTION: TextField,
  QUESTION_MULTILINE: TextField,
  NAME: TextField,
  USERNAME: TextField,
  EMAIL: TextField,
  PHONE: TextField,
  NUMBER: TextField,
  RADIO: MultipleChoice,
  CHECKBOX: MultipleChoice,
  SELECT: MultipleChoice,
  DATE: Date,
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
