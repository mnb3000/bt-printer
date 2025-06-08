import Printer from 'escpos-print/Printer';
import { Font, Justification, TextMode } from 'escpos-print/Commands';
import { Network } from 'escpos-print/Adapters';

const main = async (): Promise<void> => {
  const adapter = new Network('192.168.0.102', 9100);
  const printer = await new Printer(adapter).open();

  printer
    .setFont(Font.A)
    .setJustification(Justification.Center)
    .setTextMode(TextMode.DualWidthAndHeight)
    .writeLine('This is some large centered text')
    .setTextMode(TextMode.Normal)
    .setJustification(Justification.Left)
    .writeLine('Some normal text')
    .feed(4)
    .close()
    .then(() => console.log('Done printing...'));
};

main().catch((e) => {
  console.error(e);
});
