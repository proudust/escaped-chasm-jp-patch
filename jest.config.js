function Window_Base() {}
Window_Base.prototype.resetFontSettings = function () {};

module.exports = {
    preset: 'ts-jest',
    globals: {
        Bitmap: function () {},
        DataManager: function () {},
        Graphics: function () {},
        Scene_Splash: function () {},
        Window_Base: Window_Base,
        Window_ChoiceList: function () {},
        Window_Options: function () {},
        Window_TitleCommand: function () {},
        Yanfly: { Param: { LineHeight: 18 } },
    },
};
