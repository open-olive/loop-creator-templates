import { ui } from '@oliveai/ldk';

import { IntroWhisper, IntroWhisperSimple } from '../../whispers';

export const handler = async () => {
  new IntroWhisper().show();
  await IntroWhisperSimple.show();
};

export default {
  start: () => ui.loopOpenHandler(handler),
};
