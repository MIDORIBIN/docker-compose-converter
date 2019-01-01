// @ts-ignore
import composerize from 'composerize';

export default function(dockerCommand: string): string {
  try {
    return composerize(dockerCommand);
  } catch (e) {
    if (e instanceof SyntaxError) {
      return 'dockerコマンドの構文が間違っています。';
    }
    return 'dockerコマンドが間違っています。';
  }
}
