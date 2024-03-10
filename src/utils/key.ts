import {
  advancedKeycodeToString,
  advancedStringToKeycode,
} from './advanced-keys';
import {
  BuiltInKeycodeModule,
  VIADefinitionV3,
  VIADefinitionV2,
  getLightingDefinition,
  KeycodeType,
} from '@the-via/reader';
import {getAvailableLocales, keyLocales} from './key-locale';
export interface IKeycode {
  name: string;
  code: string;
  title?: string;
  shortName?: string;
  keys?: string;
  width?: number;
  type?: 'container' | 'text' | 'layer';
  layer?: number;
}

export interface IKeycodeMenu {
  id: string;
  label: string;
  keycodes: IKeycode[];
  width?: string;
  detailed?: string;
}

// Tests if label is an alpha
export function isAlpha(label: string) {
  return /[A-Za-z]/.test(label) && label.length === 1;
}

// Test if label is a numpad number
export function isNumpadNumber(label: string) {
  return /['0-9]/.test(label) && label.length === 1;
}

export function isArrowKey(label: string) {
  return /[🠗🠕🠖🠔←↑→↓]$/.test(label);
}

export function isNumpadSymbol(label: string) {
  const centeredSymbol = '-+.÷×'.split('');
  return label.length === 1 && centeredSymbol.includes(label[0]);
}

// Test if label is a multi-legend, e.g. "!\n1"
export function isMultiLegend(label: string) {
  const topLegend = '~!@#$%^&*()_+|{}:"<>?'.split('');
  return label.length !== 1 && topLegend.includes(label[0]);
}

// Tests if label is a number
export function isNumericOrShiftedSymbol(label: string) {
  const numbersTop = '!@#$%^&*()_+|~{}:"<>?1234567890'.split('');
  return label.length === 1 && numbersTop.includes(label[0]);
}

// Tests if label is a number
export function isNumericSymbol(label: string) {
  const numbersTop = '!@#$%^&*()_+|~{}:"<>?'.split('');
  return label.length !== 1 && numbersTop.includes(label[0]);
}

// Maps the byte value to the keycode
export function getByteForCode(
  code: string,
  basicKeyToByte: Record<string, number>,
) {
  const byte: number | undefined = basicKeyToByte[code];
  if (byte !== undefined) {
    return byte;
  } else if (isLayerCode(code)) {
    return getByteForLayerCode(code, basicKeyToByte);
  } else if (advancedStringToKeycode(code, basicKeyToByte) !== null) {
    return advancedStringToKeycode(code, basicKeyToByte);
  }
  throw `Could not find byte for ${code}`;
}

function isLayerCode(code: string) {
  return /([A-Za-z]+)\((\d+)\)/.test(code);
}

function getByteForLayerCode(
  keycode: string,
  basicKeyToByte: Record<string, number>,
): number {
  const keycodeMatch = keycode.match(/([A-Za-z]+)\((\d+)\)/);
  if (keycodeMatch) {
    const [, code, layer] = keycodeMatch;
    const numLayer = parseInt(layer);
    switch (code) {
      case 'TO': {
        return Math.min(
          basicKeyToByte._QK_TO + numLayer,
          basicKeyToByte._QK_TO_MAX,
        );
      }
      case 'MO': {
        return Math.min(
          basicKeyToByte._QK_MOMENTARY + numLayer,
          basicKeyToByte._QK_MOMENTARY_MAX,
        );
      }
      case 'DF': {
        return Math.min(
          basicKeyToByte._QK_DEF_LAYER + numLayer,
          basicKeyToByte._QK_DEF_LAYER_MAX,
        );
      }
      case 'TG': {
        return Math.min(
          basicKeyToByte._QK_TOGGLE_LAYER + numLayer,
          basicKeyToByte._QK_TOGGLE_LAYER_MAX,
        );
      }
      case 'OSL': {
        return Math.min(
          basicKeyToByte._QK_ONE_SHOT_LAYER + numLayer,
          basicKeyToByte._QK_ONE_SHOT_LAYER_MAX,
        );
      }
      case 'TT': {
        return Math.min(
          basicKeyToByte._QK_LAYER_TAP_TOGGLE + numLayer,
          basicKeyToByte._QK_LAYER_TAP_TOGGLE_MAX,
        );
      }
      case 'CUSTOM': {
        return Math.min(
          basicKeyToByte._QK_KB + numLayer,
          basicKeyToByte._QK_KB_MAX,
        );
      }
      case 'MACRO': {
        return Math.min(
          basicKeyToByte._QK_MACRO + numLayer,
          basicKeyToByte._QK_MACRO_MAX,
        );
      }
      default: {
        throw new Error('Incorrect code');
      }
    }
  }
  throw new Error('No match found');
}

function getCodeForLayerByte(
  byte: number,
  basicKeyToByte: Record<string, number>,
) {
  if (basicKeyToByte._QK_TO <= byte && basicKeyToByte._QK_TO_MAX >= byte) {
    const layer = byte - basicKeyToByte._QK_TO;
    return `TO(${layer})`;
  } else if (
    basicKeyToByte._QK_MOMENTARY <= byte &&
    basicKeyToByte._QK_MOMENTARY_MAX >= byte
  ) {
    const layer = byte - basicKeyToByte._QK_MOMENTARY;
    return `MO(${layer})`;
  } else if (
    basicKeyToByte._QK_DEF_LAYER <= byte &&
    basicKeyToByte._QK_DEF_LAYER_MAX >= byte
  ) {
    const layer = byte - basicKeyToByte._QK_DEF_LAYER;
    return `DF(${layer})`;
  } else if (
    basicKeyToByte._QK_TOGGLE_LAYER <= byte &&
    basicKeyToByte._QK_TOGGLE_LAYER_MAX >= byte
  ) {
    const layer = byte - basicKeyToByte._QK_TOGGLE_LAYER;
    return `TG(${layer})`;
  } else if (
    basicKeyToByte._QK_ONE_SHOT_LAYER <= byte &&
    basicKeyToByte._QK_ONE_SHOT_LAYER_MAX >= byte
  ) {
    const layer = byte - basicKeyToByte._QK_ONE_SHOT_LAYER;
    return `OSL(${layer})`;
  } else if (
    basicKeyToByte._QK_LAYER_TAP_TOGGLE <= byte &&
    basicKeyToByte._QK_LAYER_TAP_TOGGLE_MAX >= byte
  ) {
    const layer = byte - basicKeyToByte._QK_LAYER_TAP_TOGGLE;
    return `TT(${layer})`;
  } else if (
    basicKeyToByte._QK_KB <= byte &&
    basicKeyToByte._QK_KB_MAX >= byte
  ) {
    const n = byte - basicKeyToByte._QK_KB;
    return `CUSTOM(${n})`;
  } else if (
    basicKeyToByte._QK_MACRO <= byte &&
    basicKeyToByte._QK_MACRO_MAX >= byte
  ) {
    const n = byte - basicKeyToByte._QK_MACRO;
    return `MACRO(${n})`;
  }
}

export const keycodesList = getKeycodes('default').reduce<IKeycode[]>(
  (p, n) => p.concat(n.keycodes),
  [],
);

export const getByteToKey = (basicKeyToByte: Record<string, number>) =>
  Object.keys(basicKeyToByte).reduce((p, n) => {
    const key = basicKeyToByte[n];
    if (key in p) {
      const basicKeycode = keycodesList.find(({code}) => code === n);
      if (basicKeycode) {
        return {...p, [key]: basicKeycode.code};
      }
      return p;
    }
    return {...p, [key]: n};
  }, {} as {[key: number]: string});

function isLayerKey(byte: number, basicKeyToByte: Record<string, number>) {
  return [
    [basicKeyToByte._QK_TO, basicKeyToByte._QK_TO_MAX],
    [basicKeyToByte._QK_MOMENTARY, basicKeyToByte._QK_MOMENTARY_MAX],
    [basicKeyToByte._QK_DEF_LAYER, basicKeyToByte._QK_DEF_LAYER_MAX],
    [basicKeyToByte._QK_TOGGLE_LAYER, basicKeyToByte._QK_TOGGLE_LAYER_MAX],
    [basicKeyToByte._QK_ONE_SHOT_LAYER, basicKeyToByte._QK_ONE_SHOT_LAYER_MAX],
    [
      basicKeyToByte._QK_LAYER_TAP_TOGGLE,
      basicKeyToByte._QK_LAYER_TAP_TOGGLE_MAX,
    ],
    [basicKeyToByte._QK_KB, basicKeyToByte._QK_KB_MAX],
    [basicKeyToByte._QK_MACRO, basicKeyToByte._QK_MACRO_MAX],
  ].some((code) => byte >= code[0] && byte <= code[1]);
}

export function getCodeForByte(
  byte: number,
  basicKeyToByte: Record<string, number>,
  byteToKey: Record<number, string>,
) {
  const keycode = byteToKey[byte];
  if (keycode && !keycode.startsWith('_QK')) {
    return keycode;
  } else if (isLayerKey(byte, basicKeyToByte)) {
    return getCodeForLayerByte(byte, basicKeyToByte);
  } else if (
    advancedKeycodeToString(byte, basicKeyToByte, byteToKey) !== null
  ) {
    return advancedKeycodeToString(byte, basicKeyToByte, byteToKey);
  } else {
    return '0x' + Number(byte).toString(16);
  }
}

export function keycodeInMaster(
  keycode: string,
  basicKeyToByte: Record<string, number>,
) {
  return (
    keycode in basicKeyToByte ||
    isLayerCode(keycode) ||
    advancedStringToKeycode(keycode, basicKeyToByte) !== null
  );
}

function shorten(str: string) {
  return str
    .split(' ')
    .map((word) => word.slice(0, 1) + word.slice(1).replace(/[aeiou ]/gi, ''))
    .join('');
}

export function isCustomKeycodeByte(
  byte: number,
  basicKeyToByte: Record<string, number>,
) {
  return byte >= basicKeyToByte._QK_KB && byte <= basicKeyToByte._QK_KB_MAX;
}

export function getCustomKeycodeIndex(
  byte: number,
  basicKeyToByte: Record<string, number>,
) {
  return byte - basicKeyToByte._QK_KB;
}

export function isMacroKeycodeByte(
  byte: number,
  basicKeyToByte: Record<string, number>,
) {
  return (
    byte >= basicKeyToByte._QK_MACRO && byte <= basicKeyToByte._QK_MACRO_MAX
  );
}

export function getMacroKeycodeIndex(
  byte: number,
  basicKeyToByte: Record<string, number>,
) {
  return byte - basicKeyToByte._QK_MACRO;
}

export function getLabelForByte(
  byte: number,
  size = 100,
  basicKeyToByte: Record<string, number>,
  byteToKey: Record<number, string>,
) {
  const keycode = getCodeForByte(byte, basicKeyToByte, byteToKey);
  const basicKeycode = keycodesList.find(({code}) => code === keycode);
  if (!basicKeycode) {
    return keycode;
  }
  return getShortNameForKeycode(basicKeycode, size);
}

export function getShortNameForKeycode(keycode: IKeycode, size = 100) {
  const {code, name, shortName} = keycode;
  if (size <= 150 && shortName) {
    return shortName;
  }
  if (size === 100 && name.length > 5) {
    const shortenedName = shorten(name);
    if (!!code) {
      const shortCode = code.replace('KC_', '').replace('_', ' ');
      return shortenedName.length > 4 && shortCode.length < shortenedName.length
        ? shortCode
        : shortenedName;
    }
    return shortenedName;
  }
  return name;
}

export function getOtherMenu(
  basicKeyToByte: Record<string, number>,
): IKeycodeMenu {
  const keycodes = Object.keys(basicKeyToByte)
    .filter((key) => !key.startsWith('_QK'))
    .filter((key) => !keycodesList.map(({code}) => code).includes(key))
    .map((code) => ({
      name: code.replace('KC_', '').replace(/_/g, ' '),
      code: code,
    }));

  return {
    id: 'other',
    label: 'Other',
    keycodes,
  };
}

function buildLayerMenu(): IKeycodeMenu {
  const hardCodedKeycodes: IKeycode[] = [
    {
      name: 'Fn1\n(Fn3)',
      code: 'FN_MO13',
      title: 'Hold = Layer 1, Hold with Fn2 = Layer 3',
      shortName: 'Fn1(3)',
    },
    {
      name: 'Fn2\n(Fn3)',
      code: 'FN_MO23',
      title: 'Hold = Layer 2, Hold with Fn1 = Layer 3',
      shortName: 'Fn2(3)',
    },
    {
      name: 'Space Fn1',
      code: 'LT(1,KC_SPC)',
      title: 'Hold = Layer 1, Tap = Space',
      shortName: 'Spc Fn1',
    },
    {
      name: 'Space Fn2',
      code: 'LT(2,KC_SPC)',
      title: 'Hold = Layer 2, Tap = Space',
      shortName: 'Spc Fn2',
    },
    {
      name: 'Space Fn3',
      code: 'LT(3,KC_SPC)',
      title: 'Hold = Layer 3, Tap = Space',
      shortName: 'Spc Fn3',
    },
  ];

  const menu: IKeycodeMenu = {
    id: 'layers',
    label: 'Layers',
    width: 'label',
    keycodes: [
      {
        name: 'MO',
        code: 'MO(layer)',
        type: 'layer',
        layer: 0,
        title: 'Momentary turn layer on',
      },
      {
        name: 'TG',
        code: 'TG(layer)',
        type: 'layer',
        layer: 0,
        title: 'Toggle layer on/off',
      },
      {
        name: 'TT',
        code: 'TT(layer)',
        type: 'layer',
        layer: 0,
        title:
          "Normally acts like MO unless it's tapped multple times which toggles layer on",
      },
      {
        name: 'OSL',
        code: 'OSL(layer)',
        type: 'layer',
        layer: 0,
        title: 'Switch to layer for one keypress',
      },
      {
        name: 'TO',
        code: 'TO(layer)',
        type: 'layer',
        layer: 0,
        title: 'Turn on layer when pressed',
      },
      {
        name: 'DF',
        code: 'DF(layer)',
        type: 'layer',
        layer: 0,
        title: 'Sets the default layer',
      },
    ],
  };

  // Statically generate layer codes from 0-9 instead of making it an input
  return {
    ...menu,
    keycodes: [
      ...hardCodedKeycodes,
      ...menu.keycodes.flatMap((keycode) => {
        let res: IKeycode[] = [];
        for (let idx = 0; idx < 10; idx++) {
          const newTitle = (keycode.title || '').replace(
            'layer',
            `layer ${idx}`,
          );
          const newCode = keycode.code.replace('layer', `${idx}`);
          const newName = keycode.name + `(${idx})`;
          res = [
            ...res,
            {...keycode, name: newName, title: newTitle, code: newCode},
          ];
        }
        return res;
      }),
    ],
  };
}

function generateMacros(numMacros: number = 16): IKeycode[] {
  let res: IKeycode[] = [];
  for (let idx = 0; idx < numMacros; idx++) {
    const newName = `M${idx}`;
    const newCode = `MACRO(${idx})`;
    const newTitle = `Macro ${idx}`;
    res = [
      ...res,
      {name: newName, title: newTitle, code: newCode},
    ];
  }
  return res;
}

function getKeycodeSection(
  id: string,
  locale: string = 'default',
): IKeycodeMenu {
  let res = keyLocales.filter(
    (l) => l.locales.indexOf(locale) >= 0 && l.id == id,
  );
  if (res == null || res.length < 1) {
    res = keyLocales.filter(
      (l) => l.locales.indexOf('default') >= 0 && l.id == id,
    );
  }
  return res[0];
}
export function getKeycodes(numMacros = 16): IKeycodeMenu[] {
  var res: IKeycodeMenu[] = [];
  var useLocale = 'German_(Germany)';
  res.push(
    getKeycodeSection('basic', useLocale),
    getKeycodeSection('wt_lighting'),
    getKeycodeSection('media', useLocale),
    {
      id: 'macro',
      label: 'Macro',
      width: 'label',
      keycodes: generateMacros(numMacros),
    },
    buildLayerMenu(),
    getKeycodeSection('special', useLocale),
    getKeycodeSection('qmk_lighting'),
    getKeycodeSection('custom'),
  );
  //res.push( wt_lighting, media, macro, layer, special, qmk_lighting, custom );
  return res;
}

export const categoriesForKeycodeModule = (
  keycodeModule: BuiltInKeycodeModule | 'default',
) =>
  ({
    default: ['basic', 'media', 'macro', 'layers', 'special'],
    [BuiltInKeycodeModule.WTLighting]: ['wt_lighting'],
    [BuiltInKeycodeModule.QMKLighting]: ['qmk_lighting'],
  }[keycodeModule]);

export const getKeycodesForKeyboard = (
  definition: VIADefinitionV3 | VIADefinitionV2,
) => {
  // v2
  let includeList: string[] = [];
  if ('lighting' in definition) {
    const {keycodes} = getLightingDefinition(definition.lighting);
    includeList = categoriesForKeycodeModule('default').concat(
      keycodes === KeycodeType.None
        ? []
        : keycodes === KeycodeType.QMK
        ? categoriesForKeycodeModule(BuiltInKeycodeModule.QMKLighting)
        : categoriesForKeycodeModule(BuiltInKeycodeModule.WTLighting),
    );
  } else {
    const {keycodes} = definition;
    includeList = keycodes.flatMap(categoriesForKeycodeModule);
  }
  return getKeycodes()
    .flatMap((keycodeMenu) =>
      includeList.includes(keycodeMenu.id) ? keycodeMenu.keycodes : [],
    )
    .sort((a, b) => {
      if (a.code <= b.code) {
        return -1;
      } else {
        return 1;
      }
    });
};
