import { get, fetch, create, update, destroy } from "app/utils/api";

export const getShortLinkRequest = (id) =>
  get({
    endpoint: `/api/v1/short_links/${id}`,
  });

export const fetchShortLinksRequest = () =>
  fetch({
    endpoint: "/api/v1/short_links",
  });

export const createShortLinkRequest = (data = {}) =>
  create({
    endpoint: "/api/v1/short_links",
    data,
  });

export const updateShortLinkRequest = (id, data = {}) =>
  update({
    endpoint: `/api/v1/short_links/${id}`,
    data: { short_link: data },
  });

export const destroyShortLinkRequest = (id) =>
  destroy({
    endpoint: `/api/v1/short_links/${id}`,
  });
