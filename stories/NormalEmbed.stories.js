import { html } from 'lit-html';
import './css/simple-grid.min.css';
import './css/main.css';

export default {
	title: 'Kaltura Embed/iFrame Normal'
};

const Template = ({
	partnerID = '811441',
	mediaID = '1_p59fv7ur',
	uiConfID = '32783592'
}) => {
	return html`
		<div class='container'>
			<div class='row'>
				<div class='col-12'>
					<iframe src='https://www.kaltura.com/p/${partnerID}/sp/${partnerID}00/embedIframeJs/uiconf_id/${uiConfID}/partner_id/${partnerID}?iframeembed=true&entry_id=${mediaID}'
						allowfullscreen
						webkitallowfullscreen
						mozAllowFullScreen
						allow='autoplay *; fullscreen *; encrypted-media *'
						sandbox='allow-same-origin allow-scripts allow-top-navigation allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation'
						referrerpolicy='origin-when-cross-origin'
						frameborder='0'
					></iframe>
				</div>
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

//48523713

export const ibmMediacenterTest = Template.bind({});
ibmMediacenterTest.args = {
	partnerID: '1511271',
	mediaID: '1_k37997qm',
	uiConfID: '44723621'
};
