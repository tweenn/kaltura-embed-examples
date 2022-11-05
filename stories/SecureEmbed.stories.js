import { html } from 'lit-html';
import './css/simple-grid.min.css';
import './css/main.css';

export default {
	title: 'Kaltura Embed/Secure iFrame'
};

const Template = ({
	mediaID = '1_p59fv7ur',
	uiConfID = '32783592',
	domain = 'video.kaltura.com'
}) => {
	return html`
		<div class='container'>
			<div class='row'>
				<div class='col-12'>
					<iframe
						id='kmsembed-${mediaID}'
						src='https://${domain}/embed/secure/iframe/entryId/${mediaID}/uiConfId/${uiConfID}/st/0'
						class='kmsembed'
						allowfullscreen
						webkitallowfullscreen
						mozAllowFullScreen
						allow='autoplay *; fullscreen *; encrypted-media *'
						referrerPolicy='no-referrer-when-downgrade'
						sandbox='allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation'
						frameborder='0'
					></iframe>
				</div>
			</div>
		</div>
	`;
};

export const kaltura = Template.bind({});
kaltura.args = {
	mediaID: '1_p59fv7ur',
	uiConfID: '32783592',
	domain: 'video.kaltura.com'
};

export const oReilly = Template.bind({});
oReilly.args = {
	mediaID: '0_5j5iicm5',
	uiConfID: '48184023',
	domain: 'learning.oreilly.com'
};

export const ibmMediacenterTestPublic = Template.bind({});
ibmMediacenterTestPublic.args = {
	mediaID: '1_k37997qm',
	uiConfID: '44723621',
	domain: 'mediacenter-test.ibm.com'
};

export const ibmMediacenterTestEntitled = Template.bind({});
ibmMediacenterTestEntitled.args = {
	mediaID: '1_k37997qm',
	uiConfID: '44723621',
	domain: 'p.mediacenter-test.ibm.com'
};

