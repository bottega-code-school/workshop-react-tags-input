import * as React from "react";

type Props = {
  required?: boolean;
  placeholder?: string;
  tags: string[];
  setTags: (tags: string[]) => void;
};
export const TagInput = ({
  required = false,
  placeholder,
  tags,
  setTags,
}: Props) => {
  const [value, setValue] = React.useState<string>("");
  const [showError, setShowError] = React.useState(false);

  const addTag = () => {
    const newTag = value?.trim();

    if (newTag?.length > 0) {
      // @ts-ignore
      setTags((prev) => [...prev, newTag]);

      setValue("");
    }
  };

  const handleKeyDown = (evt: any) => {
    if (["Enter", "Tab", ","].includes(evt?.key)) {
      evt?.preventDefault();

      addTag();
    }
  };

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = ev.target;
    setValue(newValue);

    if (required && newValue?.length > 0 && showError) {
      setShowError(false);
    }
  };

  const onBlur = (ev: React.FocusEvent<HTMLInputElement>) => {
    const { value: newValue } = ev.target;

    if (required) {
      setShowError(!newValue || newValue?.length === 0);
    }
  };

  const handlePaste = (evt: any) => {
    evt?.preventDefault();

    const pastedTag = evt.clipboardData.getData("text");

    if (pastedTag?.length > 0) {
      // @ts-ignore
      setTags((prev) => [...prev, pastedTag]);
      setValue("");
    }
  };

  return (
    <div className="tag-input">
      <div className={`tags`}>
        {tags?.map((tag, index) => (
          <a
            className="createable-chip"
            key={index}
            onClick={() => setTags(tags.filter((t) => t !== tag))}
          >
            <div className="createable-chip-label">{tag}</div>
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#000",
              }}
            >
              &times;
            </span>
          </a>
        ))}
      </div>
      <input
        placeholder={placeholder}
        value={value as string}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
        required={required}
        onPaste={handlePaste}
      />
    </div>
  );
};
