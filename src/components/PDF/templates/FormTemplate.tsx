import { Element, MyForms } from '@/types/NettskjemaAPI';

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
      <div ref={onRenderCallback} />
    </>
  );
};
export default FormTemplate;
