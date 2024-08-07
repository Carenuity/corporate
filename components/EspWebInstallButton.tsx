import React from 'react';
// import { InstallButton } from 'esp-web-tools';
// import { InstallButton } from 'esp-web-tools';
// import 'esp-web-tools/dist/web/install-button';

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace JSX {
    // eslint-disable-next-line no-unused-vars
    interface IntrinsicElements {
      'esp-web-install-button': any;
    }
  }
}

/**
 * A Higher Order Component function to help initialize ESPWebInstallButton
 */
const EspWebInstallButton = ({ manifest }: { manifest: string }) => {
  // try {
  //   if (!customElements.get('esp-web-install-button')) {
  //     customElements.define('esp-web-install-button', InstallButton);
  //   }
  // } catch (error) {}

  return (
    <>
      <esp-web-install-button manifest={manifest}>
        <a
          title="Install"
          type="button"
          style={{ transition: 'all 0.2s ease-in-out' }}
          className="btn-style1 small px-5 text-center secondary"
          slot="activate"
        >
          <i className="fa-solid fa-download me-2"></i>
          <span className="">Install</span>
        </a>
        <a
          type="button"
          title="Use Chrome Desktop or Edge"
          className="btn-style1 secondary small px-5 text-center"
          style={{ backgroundColor: 'orange' }}
          slot="unsupported"
        >
          <i className="fa-solid fa-triangle-exclamation me-2"></i>
          <span className="d-none d-md-inline-block">
            Use Chrome Desktop or Edge
          </span>
        </a>
        <button
          type="button"
          className="btn text-dark btn-sm btn-danger rounded-pill px-3 text-center w-100"
          slot="not-allowed"
        >
          <i className="bi bi-dash-circle-fill me-md-2"></i>
          <span className="d-none d-md-inline-block">Not Allowed</span>
        </button>
      </esp-web-install-button>
    </>
  );
};

export default EspWebInstallButton;
