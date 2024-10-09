/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://devfest.gdg-sdc.org';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'GDGSantiagoES';
export const BRAND_NAME = 'GDG Santiago de Compostela';
export const SITE_NAME_MULTILINE = ['DevFest', 'Santiago de Compostela'];
export const SITE_NAME = 'DevFest Santiago de Compostela 2024';
export const META_DESCRIPTION =
  'DevFest Santiago de Compostela es una conferencia tecnológica organizada por Google Developers Group Santiago de Compostela. Los GDG son una red local de grupos sin ánimo de lucro ofrecen charlas, demostraciones prácticas, talleres y laboratorios de código sobre las últimas tecnologías de Google. En 2022, se celebraron más de 550 DevFests, que ayudaron a más de 320.000 desarrolladores. DevFest es el principal evento local para que los desarrolladores conozcan las últimas tecnologías de Google de la mano de Googlers, Google Developer Experts y ponentes del sector.';
// Mini-broma despues de tener que posponer el evento por el huracán:
export const SITE_DESCRIPTION =
  'El evento tech abierto a todo el mundo, ¡no nos para ni un huracán! 🙌';
export const DATE = '10 Octubre 2024';
export const SHORT_DATE = '10 Oct';
export const FULL_DATE = '10 Oct';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://ubuntu.com/community/ethos/code-of-conduct';
export const REPO = 'https://github.com/ACMCMC/gdg-sdc-devfest-2024';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  /*{
    name: 'Call for Speakers',
    route: 'https://sessionize.com/gdg-devfest-2024/'
  },*/
  {
    name: 'En directo',
    route: 'https://gdg-devfest-2024.sessionize.com/'
  },
  {
    name: 'Agenda',
    route: '/agenda'
  },
  {
    name: 'Sponsors',
    route: '/partners'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Equipo',
    route: '/team'
  },
  {
    name: 'Entradas',
    route: 'https://gdg.community.dev/events/details/google-gdg-santiago-de-compostela-presents-devfest-santiago-de-compostela-2024/'
  },
  {
    name: 'Edición 2023',
    route: 'https://devfest23.gdg-sdc.org'
  },
  /*{
    name: 'Live Stage',
    route: '/stage/a'
  },
  {
    name: 'Vercel Stage',
    route: '/stage/c'
  },
  {
    name: '100ms Stage',
    route: '/stage/m'
  },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Expo',
    route: '/expo'
  },
  {
    name: 'Jobs',
    route: '/jobs'
  }*/
];

export type TicketGenerationState = 'default' | 'loading';
