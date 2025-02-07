import * as React from "react";
import PropTypes from "prop-types";

import "./ContactChip.css";

const ContactChip = ({
  children,
  description,
  facebookUrl,
  twitterUrl,
  url,
}) => {
  return (
    <article className="ContactChip">
      <div className="ContactChip__heading">
        <div className="ContactChip__title">{children}</div>
        <div>{description}</div>
      </div>
      <div className="ContactChip__actions">
        {!!url && (
          <a href={url} rel="noopener noreferrer" target="_blank">
            WWW
          </a>
        )}
        {!!facebookUrl && (
          <a href={facebookUrl} rel="noopener noreferrer" target="_blank">
            Facebook
          </a>
        )}
        {!!twitterUrl && (
          <a href={twitterUrl} rel="noopener noreferrer" target="_blank">
            twitter
          </a>
        )}
      </div>
    </article>
  );
};

ContactChip.propTypes = {
  children: PropTypes.node,
  description: PropTypes.node,
  facebookUrl: PropTypes.string,
  twitterUrl: PropTypes.string,
  url: PropTypes.string,
};

export default ContactChip;
