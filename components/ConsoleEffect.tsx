import Typewriter from 'typewriter-effect';

export default function ConsoleEffect({
  Tag,
  string,
  noCursor,
}: {
  Tag: keyof JSX.IntrinsicElements;
  string: string;
  noCursor?: boolean;
}) {
  return (
    <Tag style={{ display: 'flex' }}>
      <span style={{ marginRight: '0.25em' }}>{!noCursor && '> '}</span>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(string).start();
        }}
      />
    </Tag>
  );
}
