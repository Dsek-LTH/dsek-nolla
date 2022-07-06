import Typewriter, { Options } from 'typewriter-effect';

const DEFAULT_OPTIONS: Options = { delay: 40 };

export default function ConsoleEffect({
  Tag,
  string,
  noCursor,
  options,
}: {
  Tag: keyof JSX.IntrinsicElements;
  string: string;
  noCursor?: boolean;
  options?: Partial<Options> | undefined;
}) {
  return (
    <Tag style={{ display: 'flex' }}>
      <span style={{ marginRight: '0.25em' }}>{!noCursor && '> '}</span>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(string).start();
        }}
        options={options || DEFAULT_OPTIONS}
      />
    </Tag>
  );
}
