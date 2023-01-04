export const Content = ({
  content,
  className,
}: {
  content: string;
  className?: string | undefined;
}) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
