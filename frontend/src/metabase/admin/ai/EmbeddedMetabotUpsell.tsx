import { t } from "ttag";

import { ExternalLink } from "metabase/common/components/ExternalLink";
import { UpsellCard } from "metabase/common/components/upsells/UpsellCard";
import { PLUGIN_ADMIN_SETTINGS } from "metabase/plugins";
import { useSelector } from "metabase/redux/hooks";
import { getUpgradeUrl } from "metabase/selectors/settings";

const campaign = "TODO";
const UTM_LOCATION = "TODO";

export function EmbeddedMetabotUpsell() {
  const upgradeUrl = useSelector((state) =>
    getUpgradeUrl(state, { utm_content: "embedding-page" }),
  );
  const { triggerUpsellFlow } = PLUGIN_ADMIN_SETTINGS.useUpsellFlow({
    campaign,
    location: "embedding-page",
  });

  return (
    <UpsellCard
      title={t`Bring AI chat to your product`}
      buttonLink={upgradeUrl}
      onClick={triggerUpsellFlow}
      campaign={campaign}
      location={UTM_LOCATION}
      buttonText={t`Upgrade to Metabase Pro`}
      fullWidth
      maxWidth="initial"
    >
      {t`Add a customizable AI assistant to your app that helps users query data and uncover insights using the collections you control.`}{" "}
      <ExternalLink href="https://www.metabase.com/docs/latest/embedding/sdk/ai-chat">{t`Learn more`}</ExternalLink>
    </UpsellCard>
  );
}
