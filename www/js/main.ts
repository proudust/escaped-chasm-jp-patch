/**
 * If you want to disable the Japanese translate patch, change "enableJpPatch" value to false.
 * 日本語化パッチを無効化したい場合、enableJpPatch を false に変更してください。
 */
var enableJpPatch = true;
if (enableJpPatch) {
    // Replace "YEP_CoreEngine" plugin parameters
    $plugins[3].parameters['Font Size'] = '20';

    // Disable "Bitmap Fonts" plugin
    $plugins[4].status = false;

    // Replace "YEP_MessageCore" plugin parameters
    $plugins[5].parameters['Font Size'] = '24';

    // Insert Japanese translate patch
    $plugins.push({
        name: 'JP_Translate',
        status: true,
        description: 'Escaped Chasm Japanese translate patch',
        parameters: {},
    });
}

PluginManager.setup($plugins);

window.onload = function () {
    SceneManager.run(Scene_Boot);
};
