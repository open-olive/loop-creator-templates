import { ui } from '@oliveai/ldk';

import { handler } from './openHandler';

jest.mock('@oliveai/ldk');

const mockIntroWhisperShow = jest.fn();
const mockIntroWhisperSimpleShow = jest.fn();

jest.mock('../../whispers', () => ({
  IntroWhisper: jest.fn(() => ({
    show: mockIntroWhisperShow,
  })),
  IntroWhisperSimple: {
    show: jest.fn(() => mockIntroWhisperSimpleShow()),
  }
}));

describe('Open Handler', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show the Intro Whisper', async () => {
    await handler();

    expect(mockIntroWhisperShow).toBeCalled();
    expect(mockIntroWhisperSimpleShow).toBeCalled();
  });
});
