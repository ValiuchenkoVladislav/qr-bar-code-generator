export type DownloadButtonProps = Readonly<{
  codeRef: HTMLElement;
}>;

export function DownloadButton({ codeRef }: DownloadButtonProps) {
  const svgData = codeRef.children[0]?.outerHTML;

  const svgBlob = new Blob([svgData!], { type:"image/svg+xml;charset=utf-8" });
  const svgUrl = URL.createObjectURL(svgBlob);

  return (
    <a href={svgUrl} download="code.svg">download</a>
  );
}
