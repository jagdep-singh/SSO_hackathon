import { I18n } from "$src/i18n";
import { html, TemplateResult } from "lit-html";
import { navigationLink } from "./footer";
import { githubIcon, icLogo, questionIcon } from "./icons";
import copyJson from "./landingPage.json";


export const landingPage = ({
  slot,
  dataPage,
}: {
  slot: TemplateResult;
  dataPage: string;
}): TemplateResult => {
  const i18n = new I18n();
  const copy = i18n.i18n(copyJson);

  return html`<main class="c-landingPage" data-page="${dataPage}">
    <div class="c-landingPage__container">
      
      <section class="c-landingPage__right" aria-label="Marketing Copy">
        <div class="c-landingPage__right__content">
          <div class="c-landingPage__right__content--full-width">${slot}</div>
        </div>
      </section>
      <section class="c-landingPage__left" aria-label="Action Pane">
        <div class="c-landingPage__left__content">
          <h1 class="c-landingPage__title">
            <span>${copy.title_1}</span>
            <span>${copy.title_2}</span>
          </h1>
          <p class="t-paragraph">${copy.subtitle}</p>
        </div>
        <div class="c-landingPage__left__footer">
          ${navigationLink({
            icon: questionIcon,
            labelText: "Support",
            id: "support-link",
            url: "thecodehive.vercel.app",
            rel: "noopener noreferrer",
            classes: "t-link--discreet c-footer__link",
          })}
          ${navigationLink({
            icon: githubIcon,
            labelText: "Source code",
            id: "source-link",
            url: "https://github.com/jagdep-singh/SSO_hackathon/tree/main/internet-identity",
            rel: "noopener noreferrer",
            classes: "t-link--discreet c-footer__link",
          })}
        </div>
      </section>
    </div>
  </main>`;
};
