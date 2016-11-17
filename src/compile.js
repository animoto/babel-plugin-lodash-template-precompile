import template from 'lodash.template';

export default function compile(templateStr, opts, path) {
  const templateSettings = opts;

  if (!templateSettings.variable) {
    throw path.buildCodeFrameError('_.templateSettings.variable is required');
  }

  ['escape', 'interpolate', 'evaluate'].forEach((templateSetting) => {
    const setting = templateSettings[templateSetting];
    if (typeof setting === 'string') {
      templateSettings[templateSetting] = new RegExp(setting, 'g');
    }
  });

  path.replaceWithSourceString(template(templateStr, templateSettings));
}
