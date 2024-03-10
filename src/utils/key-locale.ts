import {
    IKeycodeMenu
} from './key';
export const keyLocales = [
    {
      locales: ['English_(United_States)', 'default'],
      id: 'basic',
      label: 'Basic',
      keycodes: [
        {name: '', code: 'KC_NO', title: 'Nothing'},
        {name: '▽', code: 'KC_TRNS', title: 'Pass-through'},
        // TODO: remove "shortName" when multiline keycap labels are working
        {name: 'Esc', code: 'KC_ESC', keys: 'esc'},
        {name: 'A', code: 'KC_A', keys: 'a'},
        {name: 'B', code: 'KC_B', keys: 'b'},
        {name: 'C', code: 'KC_C', keys: 'c'},
        {name: 'D', code: 'KC_D', keys: 'd'},
        {name: 'E', code: 'KC_E', keys: 'e'},
        {name: 'F', code: 'KC_F', keys: 'f'},
        {name: 'G', code: 'KC_G', keys: 'g'},
        {name: 'H', code: 'KC_H', keys: 'h'},
        {name: 'I', code: 'KC_I', keys: 'i'},
        {name: 'J', code: 'KC_J', keys: 'j'},
        {name: 'K', code: 'KC_K', keys: 'k'},
        {name: 'L', code: 'KC_L', keys: 'l'},
        {name: 'M', code: 'KC_M', keys: 'm'},
        {name: 'N', code: 'KC_N', keys: 'n'},
        {name: 'O', code: 'KC_O', keys: 'o'},
        {name: 'P', code: 'KC_P', keys: 'p'},
        {name: 'Q', code: 'KC_Q', keys: 'q'},
        {name: 'R', code: 'KC_R', keys: 'r'},
        {name: 'S', code: 'KC_S', keys: 's'},
        {name: 'T', code: 'KC_T', keys: 't'},
        {name: 'U', code: 'KC_U', keys: 'u'},
        {name: 'V', code: 'KC_V', keys: 'v'},
        {name: 'W', code: 'KC_W', keys: 'w'},
        {name: 'X', code: 'KC_X', keys: 'x'},
        {name: 'Y', code: 'KC_Y', keys: 'y'},
        {name: 'Z', code: 'KC_Z', keys: 'z'},
        {name: '!\n1', code: 'KC_1', keys: '1'},
        {name: '@\n2', code: 'KC_2', keys: '2'},
        {name: '#\n3', code: 'KC_3', keys: '3'},
        {name: '$\n4', code: 'KC_4', keys: '4'},
        {name: '%\n5', code: 'KC_5', keys: '5'},
        {name: '^\n6', code: 'KC_6', keys: '6'},
        {name: '&\n7', code: 'KC_7', keys: '7'},
        {name: '*\n8', code: 'KC_8', keys: '8'},
        {name: '(\n9', code: 'KC_9', keys: '9'},
        {name: ')\n0', code: 'KC_0', keys: '0'},
        {name: '_\n-', code: 'KC_MINS', keys: '-'},
        {name: '+\n=', code: 'KC_EQL', keys: '='},
        {name: '~\n`', code: 'KC_GRV', keys: '`'},
        {name: '{\n[', code: 'KC_LBRC', keys: '['},
        {name: '}\n]', code: 'KC_RBRC', keys: ']'},
        {name: '|\n\\', code: 'KC_BSLS', keys: '\\', width: 1500},
        {name: ':\n;', code: 'KC_SCLN', keys: ';'},
        {name: '"\n\'', code: 'KC_QUOT', keys: "'"},
        {name: '<\n,', code: 'KC_COMM', keys: ','},
        {name: '>\n.', code: 'KC_DOT', keys: '.'},
        {name: '?\n/', code: 'KC_SLSH', keys: '/'},
        {name: '=', code: 'KC_PEQL'},
        {name: ',', code: 'KC_PCMM'},
        {name: 'F1', code: 'KC_F1'},
        {name: 'F2', code: 'KC_F2'},
        {name: 'F3', code: 'KC_F3'},
        {name: 'F4', code: 'KC_F4'},
        {name: 'F5', code: 'KC_F5'},
        {name: 'F6', code: 'KC_F6'},
        {name: 'F7', code: 'KC_F7'},
        {name: 'F8', code: 'KC_F8'},
        {name: 'F9', code: 'KC_F9'},
        {name: 'F10', code: 'KC_F10'},
        {name: 'F11', code: 'KC_F11'},
        {name: 'F12', code: 'KC_F12'},
        {name: 'Print Screen', code: 'KC_PSCR', shortName: 'Print'},
        {name: 'Scroll Lock', code: 'KC_SLCK', shortName: 'Scroll'},
        {name: 'Pause', code: 'KC_PAUS'},
        {name: 'Tab', code: 'KC_TAB', keys: 'tab', width: 1500},
        {name: 'Backspace', code: 'KC_BSPC', keys: 'backspace', width: 2000, shortName: 'Bksp'},
        {name: 'Insert', code: 'KC_INS', keys: 'insert', shortName: 'Ins'},
        {name: 'Del', code: 'KC_DEL', keys: 'delete'},
        {name: 'Home', code: 'KC_HOME', keys: 'home'},
        {name: 'End', code: 'KC_END', keys: 'end'},
        {name: 'Page Up', code: 'KC_PGUP', keys: 'pageup', shortName: 'PgUp'},
        {name: 'Page Down', code: 'KC_PGDN', keys: 'pagedown', shortName: 'PgDn'},
        {name: 'Num\nLock', code: 'KC_NLCK', keys: 'num', shortName: 'N.Lck'},
        {name: 'Caps Lock', code: 'KC_CAPS', keys: 'caps_lock', width: 1750},
        {name: 'Enter', code: 'KC_ENT', keys: 'enter', width: 2250},
        {name: '1', code: 'KC_P1', keys: 'num_1', title: 'Numpad 1'},
        {name: '2', code: 'KC_P2', keys: 'num_2', title: 'Numpad 2'},
        {name: '3', code: 'KC_P3', keys: 'num_3', title: 'Numpad 3'},
        {name: '4', code: 'KC_P4', keys: 'num_4', title: 'Numpad 4'},
        {name: '5', code: 'KC_P5', keys: 'num_5', title: 'Numpad 5'},
        {name: '6', code: 'KC_P6', keys: 'num_6', title: 'Numpad 6'},
        {name: '7', code: 'KC_P7', keys: 'num_7', title: 'Numpad 7'},
        {name: '8', code: 'KC_P8', keys: 'num_8', title: 'Numpad 8'},
        {name: '9', code: 'KC_P9', keys: 'num_9', title: 'Numpad 9'},
        {name: '0',  code: 'KC_P0', width: 2000, keys: 'num_0', title: 'Numpad 0'},
        {name: '÷', code: 'KC_PSLS', keys: 'num_divide', title: 'Numpad ÷'},
        {name: '×', code: 'KC_PAST', keys: 'num_multiply', title: 'Numpad ×'},
        {name: '-', code: 'KC_PMNS', keys: 'num_subtract', title: 'Numpad -'},
        {name: '+', code: 'KC_PPLS', keys: 'num_add', title: 'Numpad +'},
        {name: '.', code: 'KC_PDOT', keys: 'num_decimal', title: 'Numpad .'},
        {name: 'Num\nEnter', code: 'KC_PENT', shortName: 'N.Ent', title: 'Numpad Enter'},
        {name: 'Left Shift', code: 'KC_LSFT', keys: 'shift', width: 2250, shortName: 'LShft'},
        {name: 'Right Shift', code: 'KC_RSFT', width: 2750, shortName: 'RShft'},
        {name: 'Left Ctrl', code: 'KC_LCTL', keys: 'ctrl', width: 1250},
        {name: 'Right Ctrl', code: 'KC_RCTL', width: 1250, shortName: 'RCtl'},
        {name: 'Left Win', code: 'KC_LGUI', keys: 'cmd', width: 1250, shortName: 'LWin'},
        {name: 'Right Win', code: 'KC_RGUI', width: 1250, shortName: 'RWin'},
        {name: 'Left Alt', code: 'KC_LALT', keys: 'alt', width: 1250, shortName: 'LAlt'},
        {name: 'Right Alt', code: 'KC_RALT', width: 1250, shortName: 'RAlt'},
        {name: 'Space', code: 'KC_SPC', keys: 'space', width: 6250},
        {name: 'Menu', code: 'KC_APP', width: 1250, shortName: 'RApp'},
        {name: 'Left', code: 'KC_LEFT', keys: 'left', shortName: '←'},
        {name: 'Down', code: 'KC_DOWN', keys: 'down', shortName: '↓'},
        {name: 'Up', code: 'KC_UP', keys: 'up', shortName: '↑'},
        {name: 'Right', code: 'KC_RGHT', keys: 'right', shortName: '→'},
      ]
    },
    {
      locales: ['English_(United_States)', 'default'],
      id: 'wt_lighting',
      label: 'Lighting',
      keycodes: [
        {name: 'Bright -', code: 'BR_DEC', title: 'Brightness -', shortName: 'BR -'},
        {name: 'Bright +', code: 'BR_INC', title: 'Brightness +', shortName: 'BR +'},
        {name: 'Effect -', code: 'EF_DEC', title: 'Effect -', shortName: 'EF -'},
        {name: 'Effect +', code: 'EF_INC', title: 'Effect +', shortName: 'EF +'},
        {name: 'Effect Speed -', code: 'ES_DEC', title: 'Effect Speed -', shortName: 'ES -'},
        {name: 'Effect Speed +', code: 'ES_INC', title: 'Effect Speed +', shortName: 'ES +'},
        {name: 'Color1 Hue -', code: 'H1_DEC', title: 'Color1 Hue -', shortName: 'H1 -'},
        {name: 'Color1 Hue +', code: 'H1_INC', title: 'Color1 Hue +', shortName: 'H1 +'},
        {name: 'Color2 Hue -', code: 'H2_DEC', title: 'Color2 Hue -', shortName: 'H2 -'},
        {name: 'Color2 Hue +', code: 'H2_INC', title: 'Color2 Hue +', shortName: 'H2 +'},
        {name: 'Color1 Sat -', code: 'S1_DEC', title: 'Color1 Sat -', shortName: 'S1 -'},
        {name: 'Color1 Sat +', code: 'S1_INC', title: 'Color1 Sat +', shortName: 'S1 +'},
        {name: 'Color2 Sat -', code: 'S2_DEC', title: 'Color2 Sat -', shortName: 'S2 -'},
        {name: 'Color2 Sat +', code: 'S2_INC', title: 'Color2 Sat +', shortName: 'S2 +'},
      ] 
    },
    {
      locales: ['English_(United_States)', 'default'],
      id: 'media',
      label: 'Media',
      keycodes: [
        {name: 'Vol -', code: 'KC_VOLD', title: 'Volume Down'},
        {name: 'Vol +', code: 'KC_VOLU', title: 'Volume Up'},
        {name: 'Mute', code: 'KC_MUTE', title: 'Mute Audio'},
        {name: 'Play', code: 'KC_MPLY', title: 'Play/Pause'},
        {name: 'Media Stop', code: 'KC_MSTP', title: 'Media Stop'},
        {name: 'Previous', code: 'KC_MPRV', title: 'Media Previous'},
        {name: 'Next', code: 'KC_MNXT', title: 'Media Next'},
        {name: 'Rewind', code: 'KC_MRWD', title: 'Rewind'},
        {name: 'Fast Forward', code: 'KC_MFFD', title: 'Fast Forward'},
        {name: 'Select', code: 'KC_MSEL', title: 'Media Select'},
        {name: 'Eject', code: 'KC_EJCT', title: 'Media Eject'},
      ],
    },
    {
      locales: ['English_(United_States)', 'default'],
      id: 'special',
      label: 'Special',
      keycodes: [
        {name: '~', code: 'S(KC_GRV)', keys: '`', title: 'Shift + `'},
        {name: '!', code: 'S(KC_1)', keys: '!', title: 'Shift + 1'},
        {name: '@', code: 'S(KC_2)', keys: '@', title: 'Shift + 2'},
        {name: '#', code: 'S(KC_3)', keys: '#', title: 'Shift + 3'},
        {name: '$', code: 'S(KC_4)', keys: '$', title: 'Shift + 4'},
        {name: '%', code: 'S(KC_5)', keys: '%', title: 'Shift + 5'},
        {name: '^', code: 'S(KC_6)', keys: '^', title: 'Shift + 6'},
        {name: '&', code: 'S(KC_7)', keys: '&', title: 'Shift + 7'},
        {name: '*', code: 'S(KC_8)', keys: '*', title: 'Shift + 8'},
        {name: '(', code: 'S(KC_9)', keys: '(', title: 'Shift + 9'},
        {name: ')', code: 'S(KC_0)', keys: ')', title: 'Shift + 0'},
        {name: '_', code: 'S(KC_MINS)', keys: '_', title: 'Shift + -'},
        {name: '+', code: 'S(KC_EQL)', keys: '+', title: 'Shift + ='},
        {name: '{', code: 'S(KC_LBRC)', keys: '{', title: 'Shift + ['},
        {name: '}', code: 'S(KC_RBRC)', keys: '}', title: 'Shift + ]'},
        {name: '|', code: 'S(KC_BSLS)', keys: '|', title: 'Shift + \\'},
        {name: ':', code: 'S(KC_SCLN)', keys: ':', title: 'Shift + /'},
        {name: '"', code: 'S(KC_QUOT)', keys: '"', title: "Shift + '"},
        {name: '<', code: 'S(KC_COMM)', keys: '<', title: 'Shift + ,'},
        {name: '>', code: 'S(KC_DOT)', keys: '>', title: 'Shift + .'},
        {name: '?', code: 'S(KC_SLSH)', keys: '?', title: 'Shift + /'},
        {name: 'NUHS', code: 'KC_NUHS', title: 'Non-US # and ~'},
        {name: 'NUBS', code: 'KC_NUBS', title: 'Non-US \\ and |'},
        {name: 'Ro', code: 'KC_RO', title: 'JIS \\ and |'},
        {name: '¥', code: 'KC_JYEN', title: 'JPN Yen'},
        {name: '無変換', code: 'KC_MHEN', title: 'JIS Muhenkan'},
        {name: '漢字', code: 'KC_HANJ', title: 'Hanja'},
        {name: '한영', code: 'KC_HAEN', title: 'HanYeong'},
        {name: '変換', code: 'KC_HENK', title: 'JIS Henkan'},
        {name: 'かな', code: 'KC_KANA', title: 'JIS Katakana/Hiragana'},
        {name: 'Esc `', code: 'KC_GESC', title: 'Esc normally, but ` when Shift or Win is pressed'},
        {name: 'LS (', code: 'KC_LSPO', title: 'Left Shift when held, ( when tapped'},
        {name: 'RS )', code: 'KC_RSPC', title: 'Right Shift when held, ) when tapped'},
        {name: 'LC (',   code: 'KC_LCPO', title: 'Left Control when held, ( when tapped'},
        {name: 'RC )', code: 'KC_RCPC', title: 'Right Control when held, ) when tapped'},
        {name: 'LA (', code: 'KC_LAPO', title: 'Left Alt when held, ( when tapped'},
        {name: 'RA )', code: 'KC_RAPC', title: 'Right Alt when held, ) when tapped'},
        {name: 'SftEnt', code: 'KC_SFTENT', title: 'Right Shift when held, Enter when tapped'},
        {name: 'Reset', code: 'RESET', title: 'Reset the keyboard'},
        {name: 'Debug', code: 'DEBUG', title: 'Toggle debug mode'},
        {name: 'Toggle NKRO', code: 'MAGIC_TOGGLE_NKRO', shortName: 'NKRO', title: 'Toggle NKRO'},
        // I don't even think the locking stuff is enabled...
        {name: 'Locking Num Lock', code: 'KC_LNUM'},
        {name: 'Locking Caps Lock', code: 'KC_LCAP'},
        {name: 'Locking Scroll Lock', code: 'KC_LSCR'},
        {name: 'Power', code: 'KC_PWR'},
        {name: 'Power OSX', code: 'KC_POWER'},
        {name: 'Sleep', code: 'KC_SLEP'},
        {name: 'Wake', code: 'KC_WAKE'},
        {name: 'Calc', code: 'KC_CALC'},
        {name: 'Mail', code: 'KC_MAIL'},
        {name: 'Help', code: 'KC_HELP'},
        {name: 'Stop', code: 'KC_STOP'},
        {name: 'Alt Erase', code: 'KC_ERAS'},
        {name: 'Again', code: 'KC_AGAIN'},
        {name: 'Menu', code: 'KC_MENU'},
        {name: 'Undo', code: 'KC_UNDO'},
        {name: 'Select', code: 'KC_SELECT'},
        {name: 'Exec', code: 'KC_EXECUTE'},
        {name: 'Cut', code: 'KC_CUT'},
        {name: 'Copy', code: 'KC_COPY'},
        {name: 'Paste', code: 'KC_PASTE'},
        {name: 'Find', code: 'KC_FIND'},
        {name: 'My Comp', code: 'KC_MYCM'},
        {name: 'Home', code: 'KC_WWW_HOME'},
        {name: 'Back', code: 'KC_WWW_BACK'},
        {name: 'Forward', code: 'KC_WWW_FORWARD'},
        {name: 'Stop', code: 'KC_WWW_STOP'},
        {name: 'Refresh', code: 'KC_WWW_REFRESH'},
        {name: 'Favorites', code: 'KC_WWW_FAVORITES'},
        {name: 'Search', code: 'KC_WWW_SEARCH'},
        {name: 'Screen +', code: 'KC_BRIU', shortName: 'Scr +', title: 'Screen Brightness Up'},
        {name: 'Screen -', code: 'KC_BRID', shortName: 'Scr -', title: 'Screen Brightness Down'},
        {name: 'F13', code: 'KC_F13'},
        {name: 'F14', code: 'KC_F14'},
        {name: 'F15', code: 'KC_F15'},
        {name: 'F16', code: 'KC_F16'},
        {name: 'F17', code: 'KC_F17'},
        {name: 'F18', code: 'KC_F18'},
        {name: 'F19', code: 'KC_F19'},
        {name: 'F20', code: 'KC_F20'},
        {name: 'F21', code: 'KC_F21'},
        {name: 'F22', code: 'KC_F22'},
        {name: 'F23', code: 'KC_F23'},
        {name: 'F24', code: 'KC_F24'},
  
        // TODO: move these to a new group
        {name: 'Mouse ↑', code: 'KC_MS_UP'},
        {name: 'Mouse ↓', code: 'KC_MS_DOWN'},
        {name: 'Mouse ←', code: 'KC_MS_LEFT'},
        {name: 'Mouse →', code: 'KC_MS_RIGHT'},
        {name: 'Mouse Btn1', code: 'KC_MS_BTN1'},
        {name: 'Mouse Btn2', code: 'KC_MS_BTN2'},
        {name: 'Mouse Btn3', code: 'KC_MS_BTN3'},
        {name: 'Mouse Btn4', code: 'KC_MS_BTN4'},
        {name: 'Mouse Btn5', code: 'KC_MS_BTN5'},
        {name: 'Mouse Btn6', code: 'KC_MS_BTN6'},
        {name: 'Mouse Btn7', code: 'KC_MS_BTN7'},
        {name: 'Mouse Btn8', code: 'KC_MS_BTN8'},
        {name: 'Mouse Wh ↑', code: 'KC_MS_WH_UP'},
        {name: 'Mouse Wh ↓', code: 'KC_MS_WH_DOWN'},
        {name: 'Mouse Wh ←', code: 'KC_MS_WH_LEFT'},
        {name: 'Mouse Wh →', code: 'KC_MS_WH_RIGHT'},
        {name: 'Mouse Acc0', code: 'KC_MS_ACCEL0'},
        {name: 'Mouse Acc1', code: 'KC_MS_ACCEL1'},
        {name: 'Mouse Acc2', code: 'KC_MS_ACCEL2'},
  
        // TODO: move these to a new group
        {name: 'Audio On', code: 'AU_ON'},
        {name: 'Audio Off', code: 'AU_OFF'},
        {name: 'Audio Toggle', code: 'AU_TOG'},
        {name: 'Clicky Toggle', code: 'CLICKY_TOGGLE'},
        {name: 'Clicky Enable', code: 'CLICKY_ENABLE'},
        {name: 'Clicky Disable', code: 'CLICKY_DISABLE'},
        {name: 'Clicky Up', code: 'CLICKY_UP'},
        {name: 'Clicky Down', code: 'CLICKY_DOWN'},
        {name: 'Clicky Reset', code: 'CLICKY_RESET'},
        {name: 'Music On', code: 'MU_ON'},
        {name: 'Music Off', code: 'MU_OFF'},
        {name: 'Music Toggle', code: 'MU_TOG'},
        {name: 'Music Mode', code: 'MU_MOD'},
      ]
    },
    {
      locales: ['English_(United_States)', 'default'],
      id: 'qmk_lighting',
      label: 'Lighting',
      keycodes: [
        {name: 'BL Toggle', code: 'BL_TOGG'},
        {name: 'BL On', code: 'BL_ON'},
        {name: 'BL Off', code: 'BL_OFF', shortName: 'BL Off'},
        {name: 'BL -', code: 'BL_DEC'},
        {name: 'BL +', code: 'BL_INC'},
        {name: 'BL Cycle', code: 'BL_STEP'},
        {name: 'BR Toggle', code: 'BL_BRTG'},
        {name: 'RGB Toggle', code: 'RGB_TOG'},
        {name: 'RGB Mode -', code: 'RGB_RMOD'},
        {name: 'RGB Mode +', code: 'RGB_MOD'},
        {name: 'Hue -', code: 'RGB_HUD'},
        {name: 'Hue +', code: 'RGB_HUI'},
        {name: 'Sat -', code: 'RGB_SAD'},
        {name: 'Sat +', code: 'RGB_SAI'},
        {name: 'Bright -', code: 'RGB_VAD'},
        {name: 'Bright +', code: 'RGB_VAI'},
        {name: 'Effect Speed-', code: 'RGB_SPD'},
        {name: 'Effect Speed+', code: 'RGB_SPI'},
        {name: 'RGB Mode P', code: 'RGB_M_P', title: 'Plain'},
        {name: 'RGB Mode B', code: 'RGB_M_B', title: 'Breathe'},
        {name: 'RGB Mode R', code: 'RGB_M_R', title: 'Rainbow'},
        {name: 'RGB Mode SW', code: 'RGB_M_SW', title: 'Swirl'},
        {name: 'RGB Mode SN', code: 'RGB_M_SN', title: 'Snake'},
        {name: 'RGB Mode K', code: 'RGB_M_K', title: 'Knight'},
        {name: 'RGB Mode X', code: 'RGB_M_X', title: 'Xmas'},
        {name: 'RGB Mode G', code: 'RGB_M_G', title: 'Gradient'},
      ],
    },
    {
      locales: ['English_(United_States)', 'default'],
      id: 'custom',
      label: 'Custom',
      keycodes: [
        {name: 'CUSTOM(0)', code: 'CUSTOM(0)', title: 'Custom Keycode 0'},
        {name: 'CUSTOM(1)', code: 'CUSTOM(1)', title: 'Custom Keycode 1'},
        {name: 'CUSTOM(2)', code: 'CUSTOM(2)', title: 'Custom Keycode 2'},
        {name: 'CUSTOM(3)', code: 'CUSTOM(3)', title: 'Custom Keycode 3'},
        {name: 'CUSTOM(4)', code: 'CUSTOM(4)', title: 'Custom Keycode 4'},
        {name: 'CUSTOM(5)', code: 'CUSTOM(5)', title: 'Custom Keycode 5'},
        {name: 'CUSTOM(6)', code: 'CUSTOM(6)', title: 'Custom Keycode 6'},
        {name: 'CUSTOM(7)', code: 'CUSTOM(7)', title: 'Custom Keycode 7'},
        {name: 'CUSTOM(8)', code: 'CUSTOM(8)', title: 'Custom Keycode 8'},
        {name: 'CUSTOM(9)', code: 'CUSTOM(9)', title: 'Custom Keycode 9'},
        {name: 'CUSTOM(10)', code: 'CUSTOM(10)', title: 'Custom Keycode 10'},
        {name: 'CUSTOM(11)', code: 'CUSTOM(11)', title: 'Custom Keycode 11'},
        {name: 'CUSTOM(12)', code: 'CUSTOM(12)', title: 'Custom Keycode 12'},
        {name: 'CUSTOM(13)', code: 'CUSTOM(13)', title: 'Custom Keycode 13'},
        {name: 'CUSTOM(14)', code: 'CUSTOM(14)', title: 'Custom Keycode 14'},
        {name: 'CUSTOM(15)', code: 'CUSTOM(15)', title: 'Custom Keycode 15'},
      ],
    },
    {
      locales: ['English_(United_Kingdom)'],
      id: 'basic',
      label: 'Basic',
      keycodes: [
        {name: '', code: 'KC_NO', title: 'Nothing'},
        {name: '▽', code: 'KC_TRNS', title: 'Pass-through'},
        // TODO: remove "shortName" when multiline keycap labels are working
        {name: 'Esc', code: 'KC_ESC', keys: 'esc'},
        {name: 'A', code: 'KC_A', keys: 'a'},
        {name: 'B', code: 'KC_B', keys: 'b'},
        {name: 'C', code: 'KC_C', keys: 'c'},
        {name: 'D', code: 'KC_D', keys: 'd'},
        {name: 'E', code: 'KC_E', keys: 'e'},
        {name: 'F', code: 'KC_F', keys: 'f'},
        {name: 'G', code: 'KC_G', keys: 'g'},
        {name: 'H', code: 'KC_H', keys: 'h'},
        {name: 'I', code: 'KC_I', keys: 'i'},
        {name: 'J', code: 'KC_J', keys: 'j'},
        {name: 'K', code: 'KC_K', keys: 'k'},
        {name: 'L', code: 'KC_L', keys: 'l'},
        {name: 'M', code: 'KC_M', keys: 'm'},
        {name: 'N', code: 'KC_N', keys: 'n'},
        {name: 'O', code: 'KC_O', keys: 'o'},
        {name: 'P', code: 'KC_P', keys: 'p'},
        {name: 'Q', code: 'KC_Q', keys: 'q'},
        {name: 'R', code: 'KC_R', keys: 'r'},
        {name: 'S', code: 'KC_S', keys: 's'},
        {name: 'T', code: 'KC_T', keys: 't'},
        {name: 'U', code: 'KC_U', keys: 'u'},
        {name: 'V', code: 'KC_V', keys: 'v'},
        {name: 'W', code: 'KC_W', keys: 'w'},
        {name: 'X', code: 'KC_X', keys: 'x'},
        {name: 'Y', code: 'KC_Y', keys: 'y'},
        {name: 'Z', code: 'KC_Z', keys: 'z'},
        {name: '!\n1', code: 'KC_1', keys: '1'},
        {name: '"\n2', code: 'KC_2', keys: '2'},
        {name: '£\n3', code: 'KC_3', keys: '3'},
        {name: '$\n4', code: 'KC_4', keys: '4'},
        {name: '%\n5', code: 'KC_5', keys: '5'},
        {name: '^\n6', code: 'KC_6', keys: '6'},
        {name: '&\n7', code: 'KC_7', keys: '7'},
        {name: '*\n8', code: 'KC_8', keys: '8'},
        {name: '(\n9', code: 'KC_9', keys: '9'},
        {name: ')\n0', code: 'KC_0', keys: '0'},
        {name: '_\n-', code: 'KC_MINS', keys: '-'},
        {name: '+\n=', code: 'KC_EQL', keys: '='},
        {name: '¬\n`', code: 'KC_GRV', keys: '`'},
        {name: '{\n[', code: 'KC_LBRC', keys: '['},
        {name: '}\n]', code: 'KC_RBRC', keys: ']'},
        {name: '|\n\\', code: 'KC_BSLS', keys: '\\', width: 1500},
        {name: ':\n;', code: 'KC_SCLN', keys: ';'},
        {name: '@\n\'', code: 'KC_QUOT', keys: "'"},
        {name: '~\n#', code: 'KC_NUHS', keys: "#"},
        {name: '|\n\\', code: 'KC_NUBS', keys: "\\"},
        {name: '<\n,', code: 'KC_COMM', keys: ','},
        {name: '>\n.', code: 'KC_DOT', keys: '.'},
        {name: '?\n/', code: 'KC_SLSH', keys: '/'},
        {name: '=', code: 'KC_PEQL'},
        {name: ',', code: 'KC_PCMM'},
        {name: 'F1', code: 'KC_F1'},
        {name: 'F2', code: 'KC_F2'},
        {name: 'F3', code: 'KC_F3'},
        {name: 'F4', code: 'KC_F4'},
        {name: 'F5', code: 'KC_F5'},
        {name: 'F6', code: 'KC_F6'},
        {name: 'F7', code: 'KC_F7'},
        {name: 'F8', code: 'KC_F8'},
        {name: 'F9', code: 'KC_F9'},
        {name: 'F10', code: 'KC_F10'},
        {name: 'F11', code: 'KC_F11'},
        {name: 'F12', code: 'KC_F12'},
        {name: 'Print Screen', code: 'KC_PSCR', shortName: 'Print'},
        {name: 'Scroll Lock', code: 'KC_SLCK', shortName: 'Scroll'},
        {name: 'Pause', code: 'KC_PAUS'},
        {name: 'Tab', code: 'KC_TAB', keys: 'tab', width: 1500},
        {name: 'Backspace', code: 'KC_BSPC', keys: 'backspace', width: 2000, shortName: 'Bksp'},
        {name: 'Insert', code: 'KC_INS', keys: 'insert', shortName: 'Ins'},
        {name: 'Del', code: 'KC_DEL', keys: 'delete'},
        {name: 'Home', code: 'KC_HOME', keys: 'home'},
        {name: 'End', code: 'KC_END', keys: 'end'},
        {name: 'Page Up', code: 'KC_PGUP', keys: 'pageup', shortName: 'PgUp'},
        {name: 'Page Down', code: 'KC_PGDN', keys: 'pagedown', shortName: 'PgDn'},
        {name: 'Num\nLock', code: 'KC_NLCK', keys: 'num', shortName: 'N.Lck'},
        {name: 'Caps Lock', code: 'KC_CAPS', keys: 'caps_lock', width: 1750},
        {name: 'Enter', code: 'KC_ENT', keys: 'enter', width: 2250},
        {name: '1', code: 'KC_P1', keys: 'num_1', title: 'Numpad 1'},
        {name: '2', code: 'KC_P2', keys: 'num_2', title: 'Numpad 2'},
        {name: '3', code: 'KC_P3', keys: 'num_3', title: 'Numpad 3'},
        {name: '4', code: 'KC_P4', keys: 'num_4', title: 'Numpad 4'},
        {name: '5', code: 'KC_P5', keys: 'num_5', title: 'Numpad 5'},
        {name: '6', code: 'KC_P6', keys: 'num_6', title: 'Numpad 6'},
        {name: '7', code: 'KC_P7', keys: 'num_7', title: 'Numpad 7'},
        {name: '8', code: 'KC_P8', keys: 'num_8', title: 'Numpad 8'},
        {name: '9', code: 'KC_P9', keys: 'num_9', title: 'Numpad 9'},
        {name: '0',  code: 'KC_P0', width: 2000, keys: 'num_0', title: 'Numpad 0'},
        {name: '÷', code: 'KC_PSLS', keys: 'num_divide', title: 'Numpad ÷'},
        {name: '×', code: 'KC_PAST', keys: 'num_multiply', title: 'Numpad ×'},
        {name: '-', code: 'KC_PMNS', keys: 'num_subtract', title: 'Numpad -'},
        {name: '+', code: 'KC_PPLS', keys: 'num_add', title: 'Numpad +'},
        {name: '.', code: 'KC_PDOT', keys: 'num_decimal', title: 'Numpad .'},
        {name: 'Num\nEnter', code: 'KC_PENT', shortName: 'N.Ent', title: 'Numpad Enter'},
        {name: 'Left Shift', code: 'KC_LSFT', keys: 'shift', width: 2250, shortName: 'LShft'},
        {name: 'Right Shift', code: 'KC_RSFT', width: 2750, shortName: 'RShft'},
        {name: 'Left Ctrl', code: 'KC_LCTL', keys: 'ctrl', width: 1250},
        {name: 'Right Ctrl', code: 'KC_RCTL', width: 1250, shortName: 'RCtl'},
        {name: 'Left Win', code: 'KC_LGUI', keys: 'cmd', width: 1250, shortName: 'LWin'},
        {name: 'Right Win', code: 'KC_RGUI', width: 1250, shortName: 'RWin'},
        {name: 'Left Alt', code: 'KC_LALT', keys: 'alt', width: 1250, shortName: 'LAlt'},
        {name: 'Right Alt', code: 'KC_RALT', width: 1250, shortName: 'RAlt'},
        {name: 'Space', code: 'KC_SPC', keys: 'space', width: 6250},
        {name: 'Menu', code: 'KC_APP', width: 1250, shortName: 'RApp'},
        {name: 'Left', code: 'KC_LEFT', keys: 'left', shortName: '←'},
        {name: 'Down', code: 'KC_DOWN', keys: 'down', shortName: '↓'},
        {name: 'Up', code: 'KC_UP', keys: 'up', shortName: '↑'},
        {name: 'Right', code: 'KC_RGHT', keys: 'right', shortName: '→'},
      ]
    },
    {
      locales: ['English_(United_Kingdom)', 'German_(Germany)'],
      id: 'special',
      label: 'Special',
      keycodes: [
        {name: '¬', code: 'S(KC_GRV)', keys: '`', title: 'Shift + `'},
        {name: '!', code: 'S(KC_1)', keys: '!', title: 'Shift + 1'},
        {name: '"', code: 'S(KC_2)', keys: '@', title: 'Shift + 2'},
        {name: '£', code: 'S(KC_3)', keys: '#', title: 'Shift + 3'},
        {name: '$', code: 'S(KC_4)', keys: '$', title: 'Shift + 4'},
        {name: '%', code: 'S(KC_5)', keys: '%', title: 'Shift + 5'},
        {name: '^', code: 'S(KC_6)', keys: '^', title: 'Shift + 6'},
        {name: '&', code: 'S(KC_7)', keys: '&', title: 'Shift + 7'},
        {name: '*', code: 'S(KC_8)', keys: '*', title: 'Shift + 8'},
        {name: '(', code: 'S(KC_9)', keys: '(', title: 'Shift + 9'},
        {name: ')', code: 'S(KC_0)', keys: ')', title: 'Shift + 0'},
        {name: '_', code: 'S(KC_MINS)', keys: '_', title: 'Shift + -'},
        {name: '+', code: 'S(KC_EQL)', keys: '+', title: 'Shift + ='},
        {name: '{', code: 'S(KC_LBRC)', keys: '{', title: 'Shift + ['},
        {name: '}', code: 'S(KC_RBRC)', keys: '}', title: 'Shift + ]'},
        {name: '|', code: 'S(KC_BSLS)', keys: '|', title: 'Shift + \\'},
        {name: ':', code: 'S(KC_SCLN)', keys: ':', title: 'Shift + /'},
        {name: '"', code: 'S(KC_QUOT)', keys: '"', title: "Shift + '"},
        {name: '<', code: 'S(KC_COMM)', keys: '<', title: 'Shift + ,'},
        {name: '>', code: 'S(KC_DOT)', keys: '>', title: 'Shift + .'},
        {name: '?', code: 'S(KC_SLSH)', keys: '?', title: 'Shift + /'},
        {name: 'Ro', code: 'KC_RO', title: 'JIS \\ and |'},
        {name: '¥', code: 'KC_JYEN', title: 'JPN Yen'},
        {name: '無変換', code: 'KC_MHEN', title: 'JIS Muhenkan'},
        {name: '漢字', code: 'KC_HANJ', title: 'Hanja'},
        {name: '한영', code: 'KC_HAEN', title: 'HanYeong'},
        {name: '変換', code: 'KC_HENK', title: 'JIS Henkan'},
        {name: 'かな', code: 'KC_KANA', title: 'JIS Katakana/Hiragana'},
        {name: 'Esc `', code: 'KC_GESC', title: 'Esc normally, but ` when Shift or Win is pressed'},
        {name: 'LS (', code: 'KC_LSPO', title: 'Left Shift when held, ( when tapped'},
        {name: 'RS )', code: 'KC_RSPC', title: 'Right Shift when held, ) when tapped'},
        {name: 'LC (',   code: 'KC_LCPO', title: 'Left Control when held, ( when tapped'},
        {name: 'RC )', code: 'KC_RCPC', title: 'Right Control when held, ) when tapped'},
        {name: 'LA (', code: 'KC_LAPO', title: 'Left Alt when held, ( when tapped'},
        {name: 'RA )', code: 'KC_RAPC', title: 'Right Alt when held, ) when tapped'},
        {name: 'SftEnt', code: 'KC_SFTENT', title: 'Right Shift when held, Enter when tapped'},
        {name: 'Reset', code: 'RESET', title: 'Reset the keyboard'},
        {name: 'Debug', code: 'DEBUG', title: 'Toggle debug mode'},
        {name: 'Toggle NKRO', code: 'MAGIC_TOGGLE_NKRO', shortName: 'NKRO', title: 'Toggle NKRO'},
        // I don't even think the locking stuff is enabled...
        {name: 'Locking Num Lock', code: 'KC_LNUM'},
        {name: 'Locking Caps Lock', code: 'KC_LCAP'},
        {name: 'Locking Scroll Lock', code: 'KC_LSCR'},
        {name: 'Power', code: 'KC_PWR'},
        {name: 'Power OSX', code: 'KC_POWER'},
        {name: 'Sleep', code: 'KC_SLEP'},
        {name: 'Wake', code: 'KC_WAKE'},
        {name: 'Calc', code: 'KC_CALC'},
        {name: 'Mail', code: 'KC_MAIL'},
        {name: 'Help', code: 'KC_HELP'},
        {name: 'Stop', code: 'KC_STOP'},
        {name: 'Alt Erase', code: 'KC_ERAS'},
        {name: 'Again', code: 'KC_AGAIN'},
        {name: 'Menu', code: 'KC_MENU'},
        {name: 'Undo', code: 'KC_UNDO'},
        {name: 'Select', code: 'KC_SELECT'},
        {name: 'Exec', code: 'KC_EXECUTE'},
        {name: 'Cut', code: 'KC_CUT'},
        {name: 'Copy', code: 'KC_COPY'},
        {name: 'Paste', code: 'KC_PASTE'},
        {name: 'Find', code: 'KC_FIND'},
        {name: 'My Comp', code: 'KC_MYCM'},
        {name: 'Home', code: 'KC_WWW_HOME'},
        {name: 'Back', code: 'KC_WWW_BACK'},
        {name: 'Forward', code: 'KC_WWW_FORWARD'},
        {name: 'Stop', code: 'KC_WWW_STOP'},
        {name: 'Refresh', code: 'KC_WWW_REFRESH'},
        {name: 'Favorites', code: 'KC_WWW_FAVORITES'},
        {name: 'Search', code: 'KC_WWW_SEARCH'},
        {name: 'Screen +', code: 'KC_BRIU', shortName: 'Scr +', title: 'Screen Brightness Up'},
        {name: 'Screen -', code: 'KC_BRID', shortName: 'Scr -', title: 'Screen Brightness Down'},
        {name: 'F13', code: 'KC_F13'},
        {name: 'F14', code: 'KC_F14'},
        {name: 'F15', code: 'KC_F15'},
        {name: 'F16', code: 'KC_F16'},
        {name: 'F17', code: 'KC_F17'},
        {name: 'F18', code: 'KC_F18'},
        {name: 'F19', code: 'KC_F19'},
        {name: 'F20', code: 'KC_F20'},
        {name: 'F21', code: 'KC_F21'},
        {name: 'F22', code: 'KC_F22'},
        {name: 'F23', code: 'KC_F23'},
        {name: 'F24', code: 'KC_F24'},
  
        // TODO: move these to a new group
        {name: 'Mouse ↑', code: 'KC_MS_UP'},
        {name: 'Mouse ↓', code: 'KC_MS_DOWN'},
        {name: 'Mouse ←', code: 'KC_MS_LEFT'},
        {name: 'Mouse →', code: 'KC_MS_RIGHT'},
        {name: 'Mouse Btn1', code: 'KC_MS_BTN1'},
        {name: 'Mouse Btn2', code: 'KC_MS_BTN2'},
        {name: 'Mouse Btn3', code: 'KC_MS_BTN3'},
        {name: 'Mouse Btn4', code: 'KC_MS_BTN4'},
        {name: 'Mouse Btn5', code: 'KC_MS_BTN5'},
        {name: 'Mouse Btn6', code: 'KC_MS_BTN6'},
        {name: 'Mouse Btn7', code: 'KC_MS_BTN7'},
        {name: 'Mouse Btn8', code: 'KC_MS_BTN8'},
        {name: 'Mouse Wh ↑', code: 'KC_MS_WH_UP'},
        {name: 'Mouse Wh ↓', code: 'KC_MS_WH_DOWN'},
        {name: 'Mouse Wh ←', code: 'KC_MS_WH_LEFT'},
        {name: 'Mouse Wh →', code: 'KC_MS_WH_RIGHT'},
        {name: 'Mouse Acc0', code: 'KC_MS_ACCEL0'},
        {name: 'Mouse Acc1', code: 'KC_MS_ACCEL1'},
        {name: 'Mouse Acc2', code: 'KC_MS_ACCEL2'},
  
        // TODO: move these to a new group
        {name: 'Audio On', code: 'AU_ON'},
        {name: 'Audio Off', code: 'AU_OFF'},
        {name: 'Audio Toggle', code: 'AU_TOG'},
        {name: 'Clicky Toggle', code: 'CLICKY_TOGGLE'},
        {name: 'Clicky Enable', code: 'CLICKY_ENABLE'},
        {name: 'Clicky Disable', code: 'CLICKY_DISABLE'},
        {name: 'Clicky Up', code: 'CLICKY_UP'},
        {name: 'Clicky Down', code: 'CLICKY_DOWN'},
        {name: 'Clicky Reset', code: 'CLICKY_RESET'},
        {name: 'Music On', code: 'MU_ON'},
        {name: 'Music Off', code: 'MU_OFF'},
        {name: 'Music Toggle', code: 'MU_TOG'},
        {name: 'Music Mode', code: 'MU_MOD'},
      ]
    },
    {
      locales: ['German_(Germany)'],
      id: 'basic',
      label: 'Basic',
      keycodes: [
        {name: '', code: 'KC_NO', title: 'Nothing'},
        {name: '▽', code: 'KC_TRNS', title: 'Pass-through'},
        // TODO: remove "shortName" when multiline keycap labels are working
        {name: 'Esc', code: 'KC_ESC', keys: 'esc'},
        {name: 'A', code: 'KC_A', keys: 'a'},
        {name: 'B', code: 'KC_B', keys: 'b'},
        {name: 'C', code: 'KC_C', keys: 'c'},
        {name: 'D', code: 'KC_D', keys: 'd'},
        {name: 'E', code: 'KC_E', keys: 'e'},
        {name: 'F', code: 'KC_F', keys: 'f'},
        {name: 'G', code: 'KC_G', keys: 'g'},
        {name: 'H', code: 'KC_H', keys: 'h'},
        {name: 'I', code: 'KC_I', keys: 'i'},
        {name: 'J', code: 'KC_J', keys: 'j'},
        {name: 'K', code: 'KC_K', keys: 'k'},
        {name: 'L', code: 'KC_L', keys: 'l'},
        {name: 'M', code: 'KC_M', keys: 'm'},
        {name: 'N', code: 'KC_N', keys: 'n'},
        {name: 'O', code: 'KC_O', keys: 'o'},
        {name: 'P', code: 'KC_P', keys: 'p'},
        {name: 'Q', code: 'KC_Q', keys: 'q'},
        {name: 'R', code: 'KC_R', keys: 'r'},
        {name: 'S', code: 'KC_S', keys: 's'},
        {name: 'T', code: 'KC_T', keys: 't'},
        {name: 'U', code: 'KC_U', keys: 'u'},
        {name: 'V', code: 'KC_V', keys: 'v'},
        {name: 'W', code: 'KC_W', keys: 'w'},
        {name: 'X', code: 'KC_X', keys: 'x'},
        {name: 'Z', code: 'KC_Y', keys: 'y'},
        {name: 'Y', code: 'KC_Z', keys: 'z'},
        {name: '!\n1', code: 'KC_1', keys: '1'},
        {name: '"\n2', code: 'KC_2', keys: '2'},
        {name: '§\n3', code: 'KC_3', keys: '3'},
        {name: '$\n4', code: 'KC_4', keys: '4'},
        {name: '%\n5', code: 'KC_5', keys: '5'},
        {name: '&\n6', code: 'KC_6', keys: '6'},
        {name: '/\n7', code: 'KC_7', keys: '7'},
        {name: '(\n8', code: 'KC_8', keys: '8'},
        {name: ')\n9', code: 'KC_9', keys: '9'},
        {name: '=\n0', code: 'KC_0', keys: '0'},
        {name: '?\nß', code: 'KC_MINS', keys: '-'},
        {name: '`\n´', code: 'KC_EQL', keys: '='},
        {name: '°\n^', code: 'KC_GRV', keys: '`'},
        {name: 'Ü', code: 'KC_LBRC', keys: '['},
        {name: '*\n+', code: 'KC_RBRC', keys: ']'},
        {name: 'Ö', code: 'KC_SCLN', keys: ';'},
        {name: 'Ä', code: 'KC_QUOT', keys: "'"},
        {name: '\'\n#', code: 'KC_NUHS', keys: "#"},
        {name: '>\n<', code: 'KC_NUBS', keys: "\\"},  
        {name: ';\n,', code: 'KC_COMM', keys: ','},
        {name: ':\n.', code: 'KC_DOT', keys: '.'},
        {name: '_\n-', code: 'KC_SLSH', keys: '/'},
        {name: '=', code: 'KC_PEQL'},
        {name: ',', code: 'KC_PCMM'},
        {name: 'F1', code: 'KC_F1'},
        {name: 'F2', code: 'KC_F2'},
        {name: 'F3', code: 'KC_F3'},
        {name: 'F4', code: 'KC_F4'},
        {name: 'F5', code: 'KC_F5'},
        {name: 'F6', code: 'KC_F6'},
        {name: 'F7', code: 'KC_F7'},
        {name: 'F8', code: 'KC_F8'},
        {name: 'F9', code: 'KC_F9'},
        {name: 'F10', code: 'KC_F10'},
        {name: 'F11', code: 'KC_F11'},
        {name: 'F12', code: 'KC_F12'},
        {name: 'Print Screen', code: 'KC_PSCR', shortName: 'Print'},
        {name: 'Scroll Lock', code: 'KC_SLCK', shortName: 'Scroll'},
        {name: 'Pause', code: 'KC_PAUS'},
        {name: 'Tab', code: 'KC_TAB', keys: 'tab', width: 1500},
        {name: 'Backspace', code: 'KC_BSPC', keys: 'backspace', width: 2000, shortName: 'Bksp'},
        {name: 'Insert', code: 'KC_INS', keys: 'insert', shortName: 'Ins'},
        {name: 'Del', code: 'KC_DEL', keys: 'delete'},
        {name: 'Home', code: 'KC_HOME', keys: 'home'},
        {name: 'End', code: 'KC_END', keys: 'end'},
        {name: 'Page Up', code: 'KC_PGUP', keys: 'pageup', shortName: 'PgUp'},
        {name: 'Page Down', code: 'KC_PGDN', keys: 'pagedown', shortName: 'PgDn'},
        {name: 'Num\nLock', code: 'KC_NLCK', keys: 'num', shortName: 'N.Lck'},
        {name: 'Caps Lock', code: 'KC_CAPS', keys: 'caps_lock', width: 1750},
        {name: 'Enter', code: 'KC_ENT', keys: 'enter', width: 2250},
        {name: '1', code: 'KC_P1', keys: 'num_1', title: 'Numpad 1'},
        {name: '2', code: 'KC_P2', keys: 'num_2', title: 'Numpad 2'},
        {name: '3', code: 'KC_P3', keys: 'num_3', title: 'Numpad 3'},
        {name: '4', code: 'KC_P4', keys: 'num_4', title: 'Numpad 4'},
        {name: '5', code: 'KC_P5', keys: 'num_5', title: 'Numpad 5'},
        {name: '6', code: 'KC_P6', keys: 'num_6', title: 'Numpad 6'},
        {name: '7', code: 'KC_P7', keys: 'num_7', title: 'Numpad 7'},
        {name: '8', code: 'KC_P8', keys: 'num_8', title: 'Numpad 8'},
        {name: '9', code: 'KC_P9', keys: 'num_9', title: 'Numpad 9'},
        {name: '0',  code: 'KC_P0', width: 2000, keys: 'num_0', title: 'Numpad 0'},
        {name: '÷', code: 'KC_PSLS', keys: 'num_divide', title: 'Numpad ÷'},
        {name: '×', code: 'KC_PAST', keys: 'num_multiply', title: 'Numpad ×'},
        {name: '-', code: 'KC_PMNS', keys: 'num_subtract', title: 'Numpad -'},
        {name: '+', code: 'KC_PPLS', keys: 'num_add', title: 'Numpad +'},
        {name: '.', code: 'KC_PDOT', keys: 'num_decimal', title: 'Numpad .'},
        {name: 'Num\nEnter', code: 'KC_PENT', shortName: 'N.Ent', title: 'Numpad Enter'},
        {name: 'Left Shift', code: 'KC_LSFT', keys: 'shift', width: 2250, shortName: 'LShft'},
        {name: 'Right Shift', code: 'KC_RSFT', width: 2750, shortName: 'RShft'},
        {name: 'Left Ctrl', code: 'KC_LCTL', keys: 'ctrl', width: 1250},
        {name: 'Right Ctrl', code: 'KC_RCTL', width: 1250, shortName: 'RCtl'},
        {name: 'Left Win', code: 'KC_LGUI', keys: 'cmd', width: 1250, shortName: 'LWin'},
        {name: 'Right Win', code: 'KC_RGUI', width: 1250, shortName: 'RWin'},
        {name: 'Left Alt', code: 'KC_LALT', keys: 'alt', width: 1250, shortName: 'LAlt'},
        {name: 'Right Alt', code: 'KC_RALT', width: 1250, shortName: 'RAlt'},
        {name: 'Space', code: 'KC_SPC', keys: 'space', width: 6250},
        {name: 'Menu', code: 'KC_APP', width: 1250, shortName: 'RApp'},
        {name: 'Left', code: 'KC_LEFT', keys: 'left', shortName: '←'},
        {name: 'Down', code: 'KC_DOWN', keys: 'down', shortName: '↓'},
        {name: 'Up', code: 'KC_UP', keys: 'up', shortName: '↑'},
        {name: 'Right', code: 'KC_RGHT', keys: 'right', shortName: '→'},
      ]
    },
    /*
    {
      locales: ['en_us', 'default'],
      id: 'custom',
      keycodes: [
      ]
    }
    */
]
//export const keyLocaleList = keyLocales.map( k=> ({label: k.locales}))
export function getAvailableLocales(){
  let res: string[] =[];
  keyLocales.forEach(function (_list) {_list.locales.forEach( function (item) {res.push(item);})});
  res.sort();
  return res.map( k => ({label: k.replaceAll('_', ' '), value: k })).filter( a=> a.label != "default").filter(
    (thing, i, arr) => arr.findIndex(t => t.label === thing.label) === i
  );
}
