import ScriptTag from 'react-script-tag';

function Hum() {
    return (<ScriptTag isHydrating={true} type="text/javascript" src="./scripts.js" />);
}

export default Hum;
