
const myIcons = (() => {
    const _entries = new Map();

    function registerIcon(name, config) {
        _entries.set(name, L.icon({
            iconUrl: config.iconUrl,
            iconSize: config.iconSize || [128, 128],
            iconAnchor: config.iconAnchor || [64, 64],
            popupAnchor: config.popupAnchor || [0, -64],
            className: config.className || ''
        }));
    }

    function getIcon(name) {
        return _entries.get(name) || null;
    }

    return { registerIcon, getIcon,  };
})();


window.myIcons=myIcons;
// Example usage:
myIcons.registerIcon('cute_cat', { iconUrl: '../img/cute_cat.svg' });
myIcons.registerIcon('cute_cat_normal', { iconUrl: '../img/cute_cat_normal.png' });
myIcons.registerIcon('cute_cat_exited', { iconUrl: '../img/cute_cat_exited.png' });
myIcons.registerIcon('cute_cat_photo', { iconUrl: '../img/cute_cat_photo.svg' });
// const exampleIcon = myIcons.getIcon('example');
