import { html } from 'lit-html';
import './css/simple-grid.min.css';
import './css/main.css';

export default {
	title: 'Kaltura Embed/kWidget'
};

const Template = ({
	partnerID = '811441',
	mediaID = '1_p59fv7ur',
	uiConfID = '32783592'
}) => {
	const embedCode = () => {
		window.kWidget.embed({
			targetId: 'wrapper',
			wid: `_${partnerID}`,
			uiconf_id : uiConfID,
			entry_id : mediaID,
			flashvars: {
				autoPlay: false,
			}
		});
	};

	const loadScript = () => {
		const kScript = document.createElement('script');
		kScript.src = `https://www.kaltura.com/p/${partnerID}/sp/${partnerID}00/embedIframeJs/uiconf_id/${uiConfID}/partner_id/${partnerID}`;
		kScript.onload = () => {
			embedCode();
		}
		document.body.appendChild(kScript);
	}

	window.setTimeout(() => {
		loadScript();
	}, 500);

	return html`
		<div class='container'>
			<div class='row'>
				<div class='col-12' id='wrapper'></div>
			</div>
		</div>
	`;
};

export const kaltura = Template.bind({});
kaltura.args = {
	partnerID: '811441',
	mediaID: '1_p59fv7ur',
	uiConfID: '32783592'
};

export const oReilly = Template.bind({});
oReilly.args = {
	partnerID: '1926081',
	mediaID: '0_5j5iicm5',
	uiConfID: '48184023'
};

export const ibmMediacenterTest = Template.bind({});
ibmMediacenterTest.args = {
	partnerID: '1511271',
	mediaID: '1_k37997qm',
	uiConfID: '44723621'
};
