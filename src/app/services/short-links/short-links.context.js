import React, { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";

import {
  fetchShortLinksRequest,
  createShortLinkRequest,
  destroyShortLinkRequest,
  updateShortLinkRequest,
} from "app/services/short-links/short-links.service";

export const ShortLinksContext = createContext();

export const ShortLinksContextProvider = ({ children }) => {
  const [fetch, setFetch] = useState(true);
  const [initialized, setInitialized] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [shortLink, setShortLink] = useState({});
  const [shortLinks, setShortLinks] = useState([]);
  const [createdShortLink, setCreatedShortLink] = useState(false);
  const [creatingShortLink, setCreatingShortLink] = useState(false);
  const [updatedShortLink, setUpdatedShortLink] = useState({});
  const [updatingShortLink, setUpdatingShortLink] = useState(false);
  const [destroyedShortLink, setDestroyedShortLink] = useState({});
  const [destroyingShortLink, setDestroyingShortLink] = useState(false);
  const [validations, setValidations] = useState({});

  const editShortLink = (shortLink) => {
    setShortLink(shortLink);
    setOpenEditForm(true);
  };

  const fetchShortLinks = () => {
    setFetch(false);

    fetchShortLinksRequest()
      .then((results) => {
        const { short_links } = results.data;

        setCreatedShortLink(false);
        setUpdatedShortLink(false);
        setDestroyedShortLink(false);
        setShortLinks(short_links);
        setInitialized(true);
      })
      .catch((err) => {});
  };

  const createShortLink = (data) => {
    setCreatingShortLink(true);

    createShortLinkRequest(data)
      .then((results) => {
        setValidations({});
        setCreatedShortLink(true);
        setCreatingShortLink(false);

        toast.success("Success!", {
          position: toast.POSITION.TOP_CENTER,
        });

        setFetch(true);
      })
      .catch((err) => {
        console.log(err);
        const { response } = err;

        if (response && response.data) {
          setValidations(response.data.errors);
        }

        setCreatingShortLink(false);
      });
  };

  const updateShortLink = (id, data) => {
    setUpdatingShortLink(false);

    updateShortLinkRequest(id, data)
      .then((results) => {
        setValidations({});
        setUpdatedShortLink(true);
        setUpdatingShortLink(false);

        toast.success("Success!", {
          position: toast.POSITION.TOP_CENTER,
        });

        setFetch(true);
      })
      .catch((err) => {
        const { response } = err;

        if (response && response.data) {
          setValidations(response.data.errors);
        }

        setUpdatingShortLink(false);
      });
  };
  const destroyShortLink = (id) => {
    setDestroyingShortLink({ ...destroyShortLink, [id]: true });

    destroyShortLinkRequest(id)
      .then((results) => {
        setDestroyedShortLink(true);
        setDestroyingShortLink({ ...destroyShortLink, [id]: false });

        toast.success("Success!", {
          position: toast.POSITION.TOP_CENTER,
        });

        setFetch(true);
      })
      .catch((err) => {
        setDestroyingShortLink({ ...destroyShortLink, [id]: false });
      });
  };

  useEffect(() => {
    if (fetch) {
      fetchShortLinks();
    }
  }, [fetch]);

  return (
    <ShortLinksContext.Provider
      value={{
        setFetch,
        initialized,

        openForm,
        setOpenForm,
        openEditForm,
        setOpenEditForm,

        editShortLink,
        validations,

        shortLink,
        shortLinks,
        fetchShortLinks,
        destroyShortLink,

        createShortLink,
        createdShortLink,
        creatingShortLink,

        updateShortLink,
        updatedShortLink,
        updatingShortLink,

        destroyedShortLink,
        destroyingShortLink,
      }}
    >
      {children}
    </ShortLinksContext.Provider>
  );
};
