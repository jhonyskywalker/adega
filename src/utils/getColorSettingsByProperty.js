import designSystem from 'designSystem';

const getColorSettingsByProperty = (props, property) => {
  const ObjectKey = Object.keys(designSystem.button).filter(v => v === props.color);
  const colors = designSystem.button[String(ObjectKey)];

  return colors[property];
};

export default getColorSettingsByProperty;
