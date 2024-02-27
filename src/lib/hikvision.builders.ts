import { XMLBuilder } from 'fast-xml-parser';
import { Integrations, OnvifUserType, StreamingChannel } from '../types';

/**
 * Build integrations object in raw XML
 * @param integrations
 */
export const buildIntegrations = (integrations: Integrations) => {
  const builder = new XMLBuilder({
    format: true,
  });

  const structure = {
    Integrate: integrations,
  };

  return builder.build(structure);
};

/**
 * Build video stream options
 * @param channel
 */
export const buildStreamOptions = (channel: StreamingChannel) => {
  const builder = new XMLBuilder({
    format: true,
  });

  const structure = {
    StreamingChannel: channel,
  };

  return builder.build(structure);
};

/**
 * @param username
 * @param password
 * @param id
 * @param userType
 */
export const buildOnvifUser = (
  username: string,
  password: string,
  id: number,
  userType: OnvifUserType,
) => {
  const builder = new XMLBuilder({
    format: true,
  });

  const structure = {
    UserList: {
      User: {
        id,
        userName: username,
        password,
        userType,
      },
    },
  };

  return builder.build(structure);
};