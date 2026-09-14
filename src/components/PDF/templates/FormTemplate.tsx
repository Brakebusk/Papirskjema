import { ReactNode } from 'react';
import cn from 'clsx';

import style from './templates.module.scss';

import { FormLanguageCode, translations } from '../language';
import PDFBlock from '../layout/PDFBlock';
import PDFPageBreak from '../layout/PDFPageBreak';
import { addSpaceBetweenElements, Spacer } from '../util';
import LinearScale from './components/LinearScale';

import Flex from '@/components/Flex';
import { Element, FormSettings } from '@/types/NettskjemaAPI';
import { ComponentSize, componentSize } from '@/utils/sizes';

const ElementTitle = ({ element }: { element: Element }) => (
  <div>
    <span
      className={style.title}
      dangerouslySetInnerHTML={{
        __html: element.text || '',
      }}
    />
    {element.isMandatory && <span className={style.mandatory}>*</span>}
  </div>
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

const Heading = (element: Element) => (
  <div
    className={style.heading}
    dangerouslySetInnerHTML={{
      __html: element.text || '',
    }}
  />
);

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
  NATIONAL_ID_NUMBER: 'XXS',
};

const NationalIdFormatCaption = ({
  element,
  languageCode,
}: {
  element: Element;
  languageCode: FormLanguageCode;
}) => {
  const t = translations[languageCode];
  switch (element.nationalIdNumberType) {
    case 'NORWEGIAN_ID_NUMBER':
      return <p>{t.norwegianNationalIdNumber}</p>;
    case 'ONLY_NUMBERS':
      return null;
    case 'CUSTOM': {
      const letters = element.nationalIdNumberOfLetters;
      const digits = element.nationalIdNumberOfDigits;
      const caption =
        letters && digits
          ? t.fillInLettersAndDigits(letters, digits)
          : letters
            ? t.fillInLetters(letters)
            : digits
              ? t.fillInDigits(digits)
              : null;
      return caption ? <p>{caption}</p> : null;
    }
  }
};

const NumberLimits = ({
  element,
  languageCode,
}: {
  element: Element;
  languageCode: FormLanguageCode;
}) => {
  const { minimumValue: min, maximumValue: max } = element;
  const t = translations[languageCode];

  const caption =
    min != null && max != null
      ? t.numberBetween(min, max)
      : min != null
        ? t.numberAtLeast(min)
        : max != null
          ? t.numberAtMost(max)
          : null;
  return caption ? <p className={style.numberLimit}>{caption}</p> : null;
};

const TextField = (element: Element, languageCode: FormLanguageCode) => (
  <div>
    <ElementTitle element={element} />
    <Spacer height={8} />
    <ElementDescription element={element} />
    <Spacer height={8} />
    {element.elementType === 'NATIONAL_ID_NUMBER' && (
      <NationalIdFormatCaption element={element} languageCode={languageCode} />
    )}
    <div
      className={cn(
        style.box,
        element.elementType === 'QUESTION_MULTILINE' && style.tall,
      )}
      style={{
        width: componentSize[inputWidthMap[element.elementType] || 'XS'],
      }}
    />
    {element.elementType === 'NUMBER' && (
      <NumberLimits element={element} languageCode={languageCode} />
    )}
  </div>
);

const answerOptions = (element: Element) =>
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
  )) ?? [];

const MultipleChoice = (element: Element, languageCode: FormLanguageCode) => (
  <div>
    <ElementTitle element={element} />
    <Spacer height={8} />
    <ElementDescription element={element} />
    <Spacer height={8} />
    {element.elementType === 'CHECKBOX' ? (
      <p>
        {element.maxSelectedAnswerOptions
          ? translations[languageCode].chooseUpToOptions(
              element.maxSelectedAnswerOptions,
            )
          : translations[languageCode].chooseAsManyOptions}
      </p>
    ) : (
      <p>{translations[languageCode].chooseOneOption}</p>
    )}
    <Spacer height={4} />
    {element.isHorizontal ? (
      <div className={style.horizontalMultipleChoice}>
        {answerOptions(element)}
      </div>
    ) : (
      addSpaceBetweenElements(
        answerOptions(element).map((option, i) => (
          <PDFBlock key={i}>{option}</PDFBlock>
        )),
        8,
      )
    )}
  </div>
);

const Matrix = (element: Element, languageCode: FormLanguageCode) => (
  <div>
    <ElementTitle element={element} />
    <Spacer height={8} />
    <ElementDescription element={element} />
    <Spacer height={8} />
    {element.elementType === 'MATRIX_CHECKBOX' ? (
      <p>
        {element.maxSelectedAnswerOptions
          ? translations[languageCode].chooseUpToOptionsPerRow(
              element.maxSelectedAnswerOptions,
            )
          : translations[languageCode].chooseAsManyOptionsPerRow}
      </p>
    ) : (
      <p>{translations[languageCode].chooseOneOptionPerRow}</p>
    )}
    <Spacer height={4} />
    <div className={style.matrix}>
      <div className={style.row}>
        <div className={style.rowTitle} />
        {element.answerOptions?.map((option) => (
          <div
            className={style.matrixOptionContainer}
            key={option.answerOptionId}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: option.text || '',
              }}
            />
          </div>
        ))}
      </div>
      {addSpaceBetweenElements(
        element.subElements?.map((subElement) => (
          <div key={subElement.subElementId} className={style.row}>
            <div className={style.rowTitle}>
              <span
                dangerouslySetInnerHTML={{
                  __html: subElement.text || '',
                }}
              />
              {subElement.isMandatory && <span> *</span>}
            </div>
            {element.answerOptions?.map((option) => (
              <div
                key={option.answerOptionId}
                className={style.matrixOptionContainer}
              >
                <div
                  className={cn(
                    style.optionBox,
                    element.elementType === 'MATRIX_RADIO' && style.radio,
                  )}
                />
              </div>
            ))}
          </div>
        )) ?? [],
        16,
      )}
    </div>
  </div>
);

const Date = (element: Element, languageCode: FormLanguageCode) => {
  const showDate = element.dateFormat !== 'TIME';
  const showTime = element.dateFormat !== 'DATE';
  return (
    <div>
      <ElementTitle element={element} />
      <Spacer height={8} />
      <ElementDescription element={element} />
      <Spacer height={8} />
      <Flex align="center" columnGap={8}>
        {showDate && (
          <div>
            <div>{translations[languageCode].date}</div>
            <div
              className={style.box}
              style={{ width: componentSize['XXS'] }}
            />
          </div>
        )}
        {showTime && (
          <div>
            <div>{translations[languageCode].time}</div>
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

const SubmissionReference = (
  _element: Element,
  languageCode: FormLanguageCode,
) => (
  <div>
    <div className={style.title}>
      {translations[languageCode].submissionReference}
    </div>
    <div className={style.box} style={{ width: componentSize['XXS'] }} />
  </div>
);

const LinearScaleElement = (element: Element) => {
  return (
    <div>
      <ElementTitle element={element} />
      <Spacer height={8} />
      <ElementDescription element={element} />
      <Spacer height={8} />
      <LinearScale element={element} />
    </div>
  );
};

const ElementComponents: Partial<
  Record<
    Element['elementType'],
    (element: Element, languageCode: FormLanguageCode) => ReactNode
  >
> = {
  PAGE_BREAK: () => <PDFPageBreak />,
  HEADING: Heading,
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
  NATIONAL_ID_NUMBER: TextField,
  SUBMISSION_REFERENCE: SubmissionReference,
  MATRIX_RADIO: Matrix,
  MATRIX_CHECKBOX: Matrix,
  LINEAR_SCALE: LinearScaleElement,
};
export const renderableElements = Object.keys(
  ElementComponents,
) as Element['elementType'][];

const FormTemplate = ({
  settings,
  elements,
  onRenderCallback,
}: {
  settings: FormSettings | null;
  elements: Element[] | null;
  onRenderCallback: () => void;
}) => {
  if (!settings || !elements) return <div ref={onRenderCallback} />;

  const anyMandatory = elements.some((element) => element.isMandatory);
  const languageCode = (settings.languageCode as FormLanguageCode) || 'nb';

  return (
    <>
      {addSpaceBetweenElements(
        (anyMandatory
          ? [
              <p key="mandatory">
                {translations[languageCode].mandatoryNotice}
              </p>,
            ]
          : []
        ).concat(
          elements
            .filter(({ elementType }) =>
              renderableElements.includes(elementType),
            )
            .map((element) => (
              <PDFBlock key={element.elementId}>
                {ElementComponents[element.elementType]?.(
                  element,
                  languageCode,
                )}
              </PDFBlock>
            )),
        ),
        24,
      )}
      <div ref={onRenderCallback} />
    </>
  );
};
export default FormTemplate;
