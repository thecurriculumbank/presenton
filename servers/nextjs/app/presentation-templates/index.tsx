import {
  createTemplateEntry,
  TemplateGroupSettings,
  TemplateLayoutsWithSettings,
  TemplateWithData,
} from "./utils";

// TODO: Step 1: Import All templates Layouts Here (like the ones below)

// General templates
import BasicInfoSlideLayout, {
  layoutDescription as BasicInfoDesc,
  layoutId as BasicInfoId,
  layoutName as BasicInfoName,
  Schema as BasicInfoSchema,
} from "./general/BasicInfoSlideLayout";
import BulletIconsOnlySlideLayout, {
  layoutDescription as BulletIconsOnlyDesc,
  layoutId as BulletIconsOnlyId,
  layoutName as BulletIconsOnlyName,
  Schema as BulletIconsOnlySchema,
} from "./general/BulletIconsOnlySlideLayout";
import BulletWithIconsSlideLayout, {
  layoutDescription as BulletWithIconsDesc,
  layoutId as BulletWithIconsId,
  layoutName as BulletWithIconsName,
  Schema as BulletWithIconsSchema,
} from "./general/BulletWithIconsSlideLayout";
import ChartWithBulletsSlideLayout, {
  layoutDescription as ChartWithBulletsDesc,
  layoutId as ChartWithBulletsId,
  layoutName as ChartWithBulletsName,
  Schema as ChartWithBulletsSchema,
} from "./general/ChartWithBulletsSlideLayout";
import GeneralIntroSlideLayout, {
  layoutDescription as GeneralIntroDesc,
  layoutId as GeneralIntroId,
  layoutName as GeneralIntroName,
  Schema as GeneralIntroSchema,
} from "./general/IntroSlideLayout";
import MetricsSlideLayout, {
  layoutDescription as MetricsDesc,
  layoutId as MetricsId,
  layoutName as MetricsName,
  Schema as MetricsSchema,
} from "./general/MetricsSlideLayout";
import MetricsWithImageSlideLayout, {
  layoutDescription as MetricsWithImageDesc,
  layoutId as MetricsWithImageId,
  layoutName as MetricsWithImageName,
  Schema as MetricsWithImageSchema,
} from "./general/MetricsWithImageSlideLayout";
import NumberedBulletsSlideLayout, {
  layoutDescription as NumberedBulletsDesc,
  layoutId as NumberedBulletsId,
  layoutName as NumberedBulletsName,
  Schema as NumberedBulletsSchema,
} from "./general/NumberedBulletsSlideLayout";
import QuoteSlideLayout, {
  layoutDescription as QuoteDesc,
  layoutId as QuoteId,
  layoutName as QuoteName,
  Schema as QuoteSchema,
} from "./general/QuoteSlideLayout";
import TableInfoSlideLayout, {
  layoutDescription as TableInfoDesc,
  layoutId as TableInfoId,
  layoutName as TableInfoName,
  Schema as TableInfoSchema,
} from "./general/TableInfoSlideLayout";
import TableOfContentsSlideLayout, {
  layoutDescription as TableOfContentsDesc,
  layoutId as TableOfContentsId,
  layoutName as TableOfContentsName,
  Schema as TableOfContentsSchema,
} from "./general/TableOfContentsSlideLayout";
import TeamSlideLayout, {
  layoutDescription as TeamDesc,
  layoutId as TeamId,
  layoutName as TeamName,
  Schema as TeamSchema,
} from "./general/TeamSlideLayout";

// Neo general templates
import ChallengeAndOutcomeWithOneStatLayout, {
  layoutDescription as ChallengeAndOutcomeWithOneStatDesc,
  layoutId as ChallengeAndOutcomeWithOneStatId,
  layoutName as ChallengeAndOutcomeWithOneStatName,
  Schema as ChallengeAndOutcomeWithOneStatSchema,
} from "./neo-general/ChallengeAndOutcomeWithOneStat";
import GridBasedEightMetricsSnapshotsLayout, {
  layoutDescription as GridBasedEightMetricsSnapshotsDesc,
  layoutId as GridBasedEightMetricsSnapshotsId,
  layoutName as GridBasedEightMetricsSnapshotsName,
  Schema as GridBasedEightMetricsSnapshotsSchema,
} from "./neo-general/GridBasedEightMetricsSnapshots";
import HeadlineDescriptionWithDoubleImageLayout, {
  layoutDescription as HeadlineDescriptionWithDoubleImageDesc,
  layoutId as HeadlineDescriptionWithDoubleImageId,
  layoutName as HeadlineDescriptionWithDoubleImageName,
  Schema as HeadlineDescriptionWithDoubleImageSchema,
} from "./neo-general/HeadlineDescriptionWithDoubleImage";
import HeadlineDescriptionWithImageLayout, {
  layoutDescription as HeadlineDescriptionWithImageDesc,
  layoutId as HeadlineDescriptionWithImageId,
  layoutName as HeadlineDescriptionWithImageName,
  Schema as HeadlineDescriptionWithImageSchema,
} from "./neo-general/HeadlineDescriptionWithImage";
import HeadlineTextWithBulletsAndStatsLayout, {
  layoutDescription as HeadlineTextWithBulletsAndStatsDesc,
  layoutId as HeadlineTextWithBulletsAndStatsId,
  layoutName as HeadlineTextWithBulletsAndStatsName,
  Schema as HeadlineTextWithBulletsAndStatsSchema,
} from "./neo-general/HeadlineTextWithBulletsAndStats";
import IndexedThreeColumnListLayout, {
  layoutDescription as IndexedThreeColumnListDesc,
  layoutId as IndexedThreeColumnListId,
  layoutName as IndexedThreeColumnListName,
  Schema as IndexedThreeColumnListSchema,
} from "./neo-general/IndexedThreeColumnList";
import LayoutTextBlockWithMetricCardsLayout, {
  layoutDescription as LayoutTextBlockWithMetricCardsDesc,
  layoutId as LayoutTextBlockWithMetricCardsId,
  layoutName as LayoutTextBlockWithMetricCardsName,
  Schema as LayoutTextBlockWithMetricCardsSchema,
} from "./neo-general/LayoutTextBlockWithMetricCards";
import LeftAlignQuotesLayout, {
  layoutDescription as LeftAlignQuotesDesc,
  layoutId as LeftAlignQuotesId,
  layoutName as LeftAlignQuotesName,
  Schema as LeftAlignQuotesSchema,
} from "./neo-general/LeftAlignQuote";
import ThankYouContactInfoFooterImageSlideLayout, {
  layoutDescription as ThankYouContactInfoFooterImageSlideDesc,
  layoutId as ThankYouContactInfoFooterImageSlideId,
  layoutName as ThankYouContactInfoFooterImageSlideName,
  Schema as ThankYouContactInfoFooterImageSlideSchema,
} from "./neo-general/ThankYouContactInfoFooterImageSlide";
import TimelineLayout, {
  layoutDescription as TimelineLayoutDesc,
  layoutId as TimelineLayoutId,
  layoutName as TimelineLayoutName,
  Schema as TimelineLayoutSchema,
} from "./neo-general/Timeline";
import TitleDescriptionWithTableLayout, {
  layoutDescription as TitleDescriptionWithTableDesc,
  layoutId as TitleDescriptionWithTableId,
  layoutName as TitleDescriptionWithTableName,
  Schema as TitleDescriptionWithTableSchema,
} from "./neo-general/TitleDescriptionWithTable";
import TitleThreeColumnRiskConstraintsLayout, {
  layoutDescription as TitleThreeColumnRiskConstraintsDesc,
  layoutId as TitleThreeColumnRiskConstraintsId,
  layoutName as TitleThreeColumnRiskConstraintsName,
  Schema as TitleThreeColumnRiskConstraintsSchema,
} from "./neo-general/TitleThreeColumnRiskConstraints";
import TitleTopDescriptionFourTeamMembersGridLayout, {
  layoutDescription as TitleTopDescriptionFourTeamMembersGridDesc,
  layoutId as TitleTopDescriptionFourTeamMembersGridId,
  layoutName as TitleTopDescriptionFourTeamMembersGridName,
  Schema as TitleTopDescriptionFourTeamMembersGridSchema,
} from "./neo-general/TitleTopDescriptionFourTeamMembersGrid";

import TitleMetricsWithChartLayout, {
  layoutDescription as TitleMetricsWithChartDesc,
  layoutId as TitleMetricsWithChartId,
  layoutName as TitleMetricsWithChartName,
  Schema as TitleMetricsWithChartSchema,
} from "./neo-general/TitleMetricsWithChart";
import TitleWithFullWidthChartLayout, {
  layoutDescription as TitleWithFullWidthChartDesc,
  layoutId as TitleWithFullWidthChartId,
  layoutName as TitleWithFullWidthChartName,
  Schema as TitleWithFullWidthChartSchema,
} from "./neo-general/TitleWithFullWidthChart";
import TitleWithGridBasedHeadingAndDescriptionLayout, {
  layoutDescription as TitleWithGridBasedHeadingAndDescriptionDesc,
  layoutId as TitleWithGridBasedHeadingAndDescriptionId,
  layoutName as TitleWithGridBasedHeadingAndDescriptionName,
  Schema as TitleWithGridBasedHeadingAndDescriptionSchema,
} from "./neo-general/TitleWithGridBasedHeadingAndDescription";

import TextSplitWithEmphasisBlockLayout, {
  layoutDescription as TextSplitWithEmphasisBlockDesc,
  layoutId as TextSplitWithEmphasisBlockId,
  layoutName as TextSplitWithEmphasisBlockName,
  Schema as TextSplitWithEmphasisBlockSchema,
} from "./neo-general/TextSplitWithEmphasisBlock";

import BulletIconsOnlySlideNeoGeneralLayout, {
  layoutDescription as BulletIconsOnlyNeoGeneralDesc,
  layoutId as BulletIconsOnlyNeoGeneralId,
  layoutName as BulletIconsOnlyNeoGeneralName,
  Schema as BulletIconsOnlyNeoGeneralSchema,
} from "./neo-general/BulletIconsOnlySlideLayout";
import BulletWithIconsSlideNeoGeneralLayout, {
  layoutDescription as BulletWithIconsNeoGeneralDesc,
  layoutId as BulletWithIconsNeoGeneralId,
  layoutName as BulletWithIconsNeoGeneralName,
  Schema as BulletWithIconsNeoGeneralSchema,
} from "./neo-general/BulletWithIconsSlideLayout";
import ChartWithBulletsSlideNeoGeneralLayout, {
  layoutDescription as ChartWithBulletsNeoGeneralDesc,
  layoutId as ChartWithBulletsNeoGeneralId,
  layoutName as ChartWithBulletsNeoGeneralName,
  Schema as ChartWithBulletsNeoGeneralSchema,
} from "./neo-general/ChartWithBulletsSlideLayout";

import MetricsWithImageSlideNeoGeneralLayout, {
  layoutDescription as MetricsWithImageNeoGeneralDesc,
  layoutId as MetricsWithImageNeoGeneralId,
  layoutName as MetricsWithImageNeoGeneralName,
  Schema as MetricsWithImageNeoGeneralSchema,
} from "./neo-general/MetricsWithImageSlideLayout";
import NumberedBulletsSlideNeoGeneralLayout, {
  layoutDescription as NumberedBulletsNeoGeneralDesc,
  layoutId as NumberedBulletsNeoGeneralId,
  layoutName as NumberedBulletsNeoGeneralName,
  Schema as NumberedBulletsNeoGeneralSchema,
} from "./neo-general/NumberedBulletsSlideLayout";
import QuoteSlideNeoGeneralLayout, {
  layoutDescription as QuoteNeoGeneralDesc,
  layoutId as QuoteNeoGeneralId,
  layoutName as QuoteNeoGeneralName,
  Schema as QuoteNeoGeneralSchema,
} from "./neo-general/QuoteSlideLayout";

import MultiChartGridSlideLayout, {
  layoutDescription as MultiChartGridSlideDesc,
  layoutId as MultiChartGridSlideId,
  layoutName as MultiChartGridSlideName,
  Schema as MultiChartGridSlideSchema,
} from "./neo-general/MultiChartGridSlideLayout";
import TableOfContentWithoutPageNumberLayout, {
  layoutDescription as TableOfContentWithoutPageNumberDesc,
  layoutId as TableOfContentWithoutPageNumberId,
  layoutName as TableOfContentWithoutPageNumberName,
  Schema as TableOfContentWithoutPageNumberSchema,
} from "./neo-general/TableOfContentWithoutPageNumber";
import TeamSlideNeoGeneralLayout, {
  layoutDescription as TeamNeoGeneralDesc,
  layoutId as TeamNeoGeneralId,
  layoutName as TeamNeoGeneralName,
  Schema as TeamNeoGeneralSchema,
} from "./neo-general/TeamSlideLayout";
import TitleDescriptionMultiChartGridWithBulletsLayout, {
  layoutDescription as TitleDescriptionMultiChartGridWithBulletsDesc,
  layoutId as TitleDescriptionMultiChartGridWithBulletsId,
  layoutName as TitleDescriptionMultiChartGridWithBulletsName,
  Schema as TitleDescriptionMultiChartGridWithBulletsSchema,
} from "./neo-general/TitleDescriptionMultiChartGridWithBullets";
import TitleDescriptionMultiChartGridWithMetricsLayout, {
  layoutDescription as TitleDescriptionMultiChartGridWithMetricsDesc,
  layoutId as TitleDescriptionMultiChartGridWithMetricsId,
  layoutName as TitleDescriptionMultiChartGridWithMetricsName,
  Schema as TitleDescriptionMultiChartGridWithMetricsSchema,
} from "./neo-general/TitleDescriptionMultiChartGridWithMetrics";
import TitleMetricValueMetricLabelFunnelStagesLayout, {
  layoutDescription as TitleMetricValueMetricLabelFunnelStagesDesc,
  layoutId as TitleMetricValueMetricLabelFunnelStagesId,
  layoutName as TitleMetricValueMetricLabelFunnelStagesName,
  Schema as TitleMetricValueMetricLabelFunnelStagesSchema,
} from "./neo-general/TitleMetricValueMetricLabelFunnelStages";

// Modern templates
import BulletsWithIconsDescriptionGrid, {
  layoutDescription as BulletsIconsGridDesc,
  layoutId as BulletsIconsGridId,
  layoutName as BulletsIconsGridName,
  Schema as BulletsIconsGridSchema,
} from "./modern/BulletsWithIconsDescriptionGrid";
import ModernBulletWithIconsSlideLayout, {
  layoutDescription as ModernBulletIconsDesc,
  layoutId as ModernBulletIconsId,
  layoutName as ModernBulletIconsName,
  Schema as ModernBulletIconsSchema,
} from "./modern/BulletWithIconsSlideLayout";
import ChartOrTableWithDescription, {
  layoutDescription as ChartTableDescDesc,
  layoutId as ChartTableDescId,
  layoutName as ChartTableDescName,
  Schema as ChartTableDescSchema,
} from "./modern/ChartOrTableWithDescription";
import ChartOrTableWithMetricsDescription, {
  layoutDescription as ChartMetricsDesc,
  layoutId as ChartMetricsId,
  layoutName as ChartMetricsName,
  Schema as ChartMetricsSchema,
} from "./modern/ChartOrTableWithMetricsDescription";
import ImageAndDescriptionLayout, {
  layoutDescription as ImageDescDesc,
  layoutId as ImageDescId,
  layoutName as ImageDescName,
  Schema as ImageDescSchema,
} from "./modern/ImageAndDescriptionLayout";
import ImageListWithDescriptionSlideLayout, {
  layoutDescription as ImageListDescDesc,
  layoutId as ImageListDescId,
  layoutName as ImageListDescName,
  Schema as ImageListDescSchema,
} from "./modern/ImageListWithDescriptionSlideLayout";
import ImagesWithDescriptionLayout, {
  layoutDescription as ImagesDescDesc,
  layoutId as ImagesDescId,
  layoutName as ImagesDescName,
  Schema as ImagesDescSchema,
} from "./modern/ImagesWithDescriptionLayout";
import ModernIntroSlideLayout, {
  layoutDescription as ModernIntroDesc,
  layoutId as ModernIntroId,
  layoutName as ModernIntroName,
  Schema as ModernIntroSchema,
} from "./modern/IntroSlideLayout";
import MetricsWithDescription, {
  layoutDescription as MetricsDescDesc,
  layoutId as MetricsDescId,
  layoutName as MetricsDescName,
  Schema as MetricsDescSchema,
} from "./modern/MetricsWithDescription";
import ModernTableOfContentsLayout, {
  layoutDescription as ModernTocDesc,
  layoutId as ModernTocId,
  layoutName as ModernTocName,
  Schema as ModernTocSchema,
} from "./modern/TableOfContentsLayout";

// Neo modern templates
import TitleDescriptionBulletListModernLayout, {
  layoutDescription as TitleDescriptionBulletListModernDesc,
  layoutId as TitleDescriptionBulletListModernId,
  layoutName as TitleDescriptionBulletListModernName,
  Schema as TitleDescriptionBulletListModernSchema,
} from "./neo-modern/TitleDescriptionBulletList";
import TitleDescriptionContactListLayout, {
  layoutDescription as TitleDescriptionContactListDesc,
  layoutId as TitleDescriptionContactListId,
  layoutName as TitleDescriptionContactListName,
  Schema as TitleDescriptionContactListSchema,
} from "./neo-modern/TitleDescriptionContactList";
import TitleDescriptionDualMetricsGridLayout, {
  layoutDescription as TitleDescriptionDualMetricsGridDesc,
  layoutId as TitleDescriptionDualMetricsGridId,
  layoutName as TitleDescriptionDualMetricsGridName,
  Schema as TitleDescriptionDualMetricsGridSchema,
} from "./neo-modern/TitleDescriptionDualMetricsGrid";
import TitleDescriptionIconTimelineLayout, {
  layoutDescription as TitleDescriptionIconTimelineDesc,
  layoutId as TitleDescriptionIconTimelineId,
  layoutName as TitleDescriptionIconTimelineName,
  Schema as TitleDescriptionIconTimelineSchema,
} from "./neo-modern/TitleDescriptionIconTimeline";
import TitleDescriptionImageRightModernLayout, {
  layoutDescription as TitleDescriptionImageRightModernDesc,
  layoutId as TitleDescriptionImageRightModernId,
  layoutName as TitleDescriptionImageRightModernName,
  Schema as TitleDescriptionImageRightModernSchema,
} from "./neo-modern/TitleDescriptionImageRight";
import TitleDescriptionMetricsChartLayout, {
  layoutDescription as TitleDescriptionMetricsChartDesc,
  layoutId as TitleDescriptionMetricsChartId,
  layoutName as TitleDescriptionMetricsChartName,
  Schema as TitleDescriptionMetricsChartSchema,
} from "./neo-modern/TitleDescriptionMetricsChart";

import TitleDescriptionMetricsImageLayout, {
  layoutDescription as TitleDescriptionMetricsImageDesc,
  layoutId as TitleDescriptionMetricsImageId,
  layoutName as TitleDescriptionMetricsImageName,
  Schema as TitleDescriptionMetricsImageSchema,
} from "./neo-modern/TitleDescriptionMetricsImage";
import TitleDescriptionMultiChartGridLayout, {
  layoutDescription as TitleDescriptionMultiChartGridDesc,
  layoutId as TitleDescriptionMultiChartGridId,
  layoutName as TitleDescriptionMultiChartGridName,
  Schema as TitleDescriptionMultiChartGridSchema,
} from "./neo-modern/TitleDescriptionMultiChartGrid";
import TitleDescriptionMultiChartGridWithBulletsModernLayout, {
  layoutDescription as TitleDescriptionMultiChartGridWithBulletsModernDesc,
  layoutId as TitleDescriptionMultiChartGridWithBulletsModernId,
  layoutName as TitleDescriptionMultiChartGridWithBulletsModernName,
  Schema as TitleDescriptionMultiChartGridWithBulletsModernSchema,
} from "./neo-modern/TitleDescriptionMultiChartGridWithBullets";
import TitleDescriptionMultiChartGridWithMetricsModernLayout, {
  layoutDescription as TitleDescriptionMultiChartGridWithMetricsModernDesc,
  layoutId as TitleDescriptionMultiChartGridWithMetricsModernId,
  layoutName as TitleDescriptionMultiChartGridWithMetricsModernName,
  Schema as TitleDescriptionMultiChartGridWithMetricsModernSchema,
} from "./neo-modern/TitleDescriptionMultiChartGridWithMetrics";
import TitleDescriptionMetricsTableLayout, {
  layoutDescription as TitleDescriptionMetricsTableDesc,
  layoutId as TitleDescriptionMetricsTableId,
  layoutName as TitleDescriptionMetricsTableName,
  Schema as TitleDescriptionMetricsTableSchema,
} from "./neo-modern/TitleDescriptionTable";
import TitleDualComparisonCardsModernLayout, {
  layoutDescription as TitleDualComparisonCardsModernDesc,
  layoutId as TitleDualComparisonCardsModernId,
  layoutName as TitleDualComparisonCardsModernName,
  Schema as TitleDualComparisonCardsModernSchema,
} from "./neo-modern/TitleDualComparisonCards";
import TitleDualComparisonChartsLayout, {
  layoutDescription as TitleDualComparisonChartsDesc,
  layoutId as TitleDualComparisonChartsId,
  layoutName as TitleDualComparisonChartsName,
  Schema as TitleDualComparisonChartsSchema,
} from "./neo-modern/TitleDualComparisonCharts";
import TitleHorizontalAltenenatingTimelineLayout, {
  layoutDescription as TitleHorizontalAltenenatingTimelineDesc,
  layoutId as TitleHorizontalAltenenatingTimelineId,
  layoutName as TitleHorizontalAltenenatingTimelineName,
  Schema as TitleHorizontalAltenenatingTimelineSchema,
} from "./neo-modern/TitleHorizontalAlternatingTimeline";
import TitleKpiSnapshotGridLayout, {
  layoutDescription as TitleKpiSnapshotGridDesc,
  layoutId as TitleKpiSnapshotGridId,
  layoutName as TitleKpiSnapshotGridName,
  Schema as TitleKpiSnapshotGridSchema,
} from "./neo-modern/TitleKpiSnapshotGrid";
import TitleSubtitlesChartLayout, {
  layoutDescription as TitleSubtitlesChartDesc,
  layoutId as TitleSubtitlesChartId,
  layoutName as TitleSubtitlesChartName,
  Schema as TitleSubtitlesChartSchema,
} from "./neo-modern/TitleSubtitlesChart";
import TitleTwoColumnNumberListLayout, {
  layoutDescription as TitleTwoColumnNumberListDesc,
  layoutId as TitleTwoColumnNumberListId,
  layoutName as TitleTwoColumnNumberListName,
  Schema as TitleTwoColumnNumberListSchema,
} from "./neo-modern/TitleTwoColumnNumberedList";

// Standard templates
import ChartLeftTextRightLayout, {
  layoutDescription as ChartLeftDesc,
  layoutId as ChartLeftId,
  layoutName as ChartLeftName,
  Schema as ChartLeftSchema,
} from "./standard/ChartLeftTextRightLayout";
import ContactLayout, {
  layoutDescription as ContactDesc,
  layoutId as ContactId,
  layoutName as ContactName,
  Schema as ContactSchema,
} from "./standard/ContactLayout";
import HeadingBulletImageDescriptionLayout, {
  layoutDescription as HeadingBulletDesc,
  layoutId as HeadingBulletId,
  layoutName as HeadingBulletName,
  Schema as HeadingBulletSchema,
} from "./standard/HeadingBulletImageDescriptionLayout";
import IconBulletDescriptionLayout, {
  layoutDescription as IconBulletDesc,
  layoutId as IconBulletId,
  layoutName as IconBulletName,
  Schema as IconBulletSchema,
} from "./standard/IconBulletDescriptionLayout";
import IconImageDescriptionLayout, {
  layoutDescription as IconImageDesc,
  layoutId as IconImageId,
  layoutName as IconImageName,
  Schema as IconImageSchema,
} from "./standard/IconImageDescriptionLayout";
import StandardImageListWithDescriptionLayout, {
  layoutDescription as StdImageListDesc,
  layoutId as StdImageListId,
  layoutName as StdImageListName,
  Schema as StdImageListSchema,
} from "./standard/ImageListWithDescriptionLayout";
import StandardIntroSlideLayout, {
  layoutDescription as StandardIntroDesc,
  layoutId as StandardIntroId,
  layoutName as StandardIntroName,
  Schema as StandardIntroSchema,
} from "./standard/IntroSlideLayout";
import MetricsDescriptionLayout, {
  layoutDescription as MetricsDescLayoutDesc,
  layoutId as MetricsDescLayoutId,
  layoutName as MetricsDescLayoutName,
  Schema as MetricsDescLayoutSchema,
} from "./standard/MetricsDescriptionLayout";
import NumberedBulletSingleImageLayout, {
  layoutDescription as NumBulletImgDesc,
  layoutId as NumBulletImgId,
  layoutName as NumBulletImgName,
  Schema as NumBulletImgSchema,
} from "./standard/NumberedBulletSingleImageLayout";
import StandardTableOfContentsLayout, {
  layoutDescription as StdTocDesc,
  layoutId as StdTocId,
  layoutName as StdTocName,
  Schema as StdTocSchema,
} from "./standard/TableOfContentsLayout";
import VisualMetricsSlideLayout, {
  layoutDescription as VisualMetricsDesc,
  layoutId as VisualMetricsId,
  layoutName as VisualMetricsName,
  Schema as VisualMetricsSchema,
} from "./standard/VisualMetricsSlideLayout";

// Neo standard templates
import TitleBadgeChartLayout, {
  layoutDescription as TitleBadgeChartDesc,
  layoutId as TitleBadgeChartId,
  layoutName as TitleBadgeChartName,
  Schema as TitleBadgeChartSchema,
} from "./neo-standard/TitleBadgeChart";
import TitleDescriptionBulletListStandardLayout, {
  layoutDescription as TitleDescriptionBulletListStandardDesc,
  layoutId as TitleDescriptionBulletListStandardId,
  layoutName as TitleDescriptionBulletListStandardName,
  Schema as TitleDescriptionBulletListStandardSchema,
} from "./neo-standard/TitleDescriptionBulletList";
import TitleDescriptionContactCardsLayout, {
  layoutDescription as TitleDescriptionContactCardsDesc,
  layoutId as TitleDescriptionContactCardsId,
  layoutName as TitleDescriptionContactCardsName,
  Schema as TitleDescriptionContactCardsSchema,
} from "./neo-standard/TitleDescriptionContactCards";
import TitleDescriptionIconListLayout, {
  layoutDescription as TitleDescriptionIconListDesc,
  layoutId as TitleDescriptionIconListId,
  layoutName as TitleDescriptionIconListName,
  Schema as TitleDescriptionIconListSchema,
} from "./neo-standard/TitleDescriptionIconList";
import TitleDescriptionImageRightLayout, {
  layoutDescription as TitleDescriptionImageRightDesc,
  layoutId as TitleDescriptionImageRightId,
  layoutName as TitleDescriptionImageRightName,
  Schema as TitleDescriptionImageRightSchema,
} from "./neo-standard/TitleDescriptionImageRight";
import TitleDescriptionMultiChartGridStandardLayout, {
  layoutDescription as TitleDescriptionMultiChartGridStandardDesc,
  layoutId as TitleDescriptionMultiChartGridStandardId,
  layoutName as TitleDescriptionMultiChartGridStandardName,
  Schema as TitleDescriptionMultiChartGridStandardSchema,
} from "./neo-standard/TitleDescriptionMultiChartGrid";
import TitleDescriptionMultiChartGridWithBulletsStandardLayout, {
  layoutDescription as TitleDescriptionMultiChartGridWithBulletsStandardDesc,
  layoutId as TitleDescriptionMultiChartGridWithBulletsStandardId,
  layoutName as TitleDescriptionMultiChartGridWithBulletsStandardName,
  Schema as TitleDescriptionMultiChartGridWithBulletsStandardSchema,
} from "./neo-standard/TitleDescriptionMultiChartGridWithBullets";
import TitleDescriptionMultiChartGridWithMetricsStandardLayout, {
  layoutDescription as TitleDescriptionMultiChartGridWithMetricsStandardDesc,
  layoutId as TitleDescriptionMultiChartGridWithMetricsStandardId,
  layoutName as TitleDescriptionMultiChartGridWithMetricsStandardName,
  Schema as TitleDescriptionMultiChartGridWithMetricsStandardSchema,
} from "./neo-standard/TitleDescriptionMultiChartGridWithMetrics";
import TitleDescriptionRadialCardsLayout, {
  layoutDescription as TitleDescriptionRadialCardsDesc,
  layoutId as TitleDescriptionRadialCardsId,
  layoutName as TitleDescriptionRadialCardsName,
  Schema as TitleDescriptionRadialCardsSchema,
} from "./neo-standard/TitleDescriptionRadialCards";
import TitleDescriptionTableLayout, {
  layoutDescription as TitleDescriptionTableDesc,
  layoutId as TitleDescriptionTableId,
  layoutName as TitleDescriptionTableName,
  Schema as TitleDescriptionTableSchema,
} from "./neo-standard/TitleDescriptionTable";
import TitleDescriptionTimelineLayout, {
  layoutDescription as TitleDescriptionTimelineDesc,
  layoutId as TitleDescriptionTimelineId,
  layoutName as TitleDescriptionTimelineName,
  Schema as TitleDescriptionTimelineSchema,
} from "./neo-standard/TitleDescriptionTimeline";
import TitleDualChartsComparisonLayout, {
  layoutDescription as TitleDualChartsComparisonDesc,
  layoutId as TitleDualChartsComparisonId,
  layoutName as TitleDualChartsComparisonName,
  Schema as TitleDualChartsComparisonSchema,
} from "./neo-standard/TitleDualChartsComparison";
import TitleDualComparisonCardsLayout, {
  layoutDescription as TitleDualComparisonCardsDesc,
  layoutId as TitleDualComparisonCardsId,
  layoutName as TitleDualComparisonCardsName,
  Schema as TitleDualComparisonCardsSchema,
} from "./neo-standard/TitleDualComparisonCards";
import TitleKpiGridLayout, {
  layoutDescription as TitleKpiGridDesc,
  layoutId as TitleKpiGridId,
  layoutName as TitleKpiGridName,
  Schema as TitleKpiGridSchema,
} from "./neo-standard/TitleKpiGrid";
import TitleMetricsChartLayout, {
  layoutDescription as TitleMetricsChartDesc,
  layoutId as TitleMetricsChartId,
  layoutName as TitleMetricsChartName,
  Schema as TitleMetricsChartSchema,
} from "./neo-standard/TitleMetricsChart";
import TitleMetricsImageLayout, {
  layoutDescription as TitleMetricsImageDesc,
  layoutId as TitleMetricsImageId,
  layoutName as TitleMetricsImageName,
  Schema as TitleMetricsImageSchema,
} from "./neo-standard/TitleMetricsImage";
import TitlePointsDonutGridLayout, {
  layoutDescription as TitlePointsDonutGridDesc,
  layoutId as TitlePointsDonutGridId,
  layoutName as TitlePointsDonutGridName,
  Schema as TitlePointsDonutGridSchema,
} from "./neo-standard/TitlePointsDonutGrid";

// Swift templates
import BulletsWithIconsTitleDescription, {
  layoutDescription as BulletsIconsTitleDesc,
  layoutId as BulletsIconsTitleId,
  layoutName as BulletsIconsTitleName,
  Schema as BulletsIconsTitleSchema,
} from "./swift/BulletsWithIconsTitleDescription";
import IconBulletListDescription, {
  layoutDescription as IconBulletListDesc,
  layoutId as IconBulletListId,
  layoutName as IconBulletListName,
  Schema as IconBulletListSchema,
} from "./swift/IconBulletListDescription";
import ImageListDescription, {
  layoutDescription as ImageListDesc,
  layoutId as ImageListId,
  layoutName as ImageListName,
  Schema as ImageListSchema,
} from "./swift/ImageListDescription";
import SwiftIntroSlideLayout, {
  layoutDescription as SwiftIntroDesc,
  layoutId as SwiftIntroId,
  layoutName as SwiftIntroName,
  Schema as SwiftIntroSchema,
} from "./swift/IntroSlideLayout";
import MetricsNumbers, {
  layoutDescription as MetricsNumbersDesc,
  layoutId as MetricsNumbersId,
  layoutName as MetricsNumbersName,
  Schema as MetricsNumbersSchema,
} from "./swift/MetricsNumbers";
import SimpleBulletPointsLayout, {
  layoutDescription as SimpleBulletDesc,
  layoutId as SimpleBulletId,
  layoutName as SimpleBulletName,
  Schema as SimpleBulletSchema,
} from "./swift/SimpleBulletPointsLayout";
import SwiftTableOfContents, {
  layoutDescription as SwiftTocDesc,
  layoutId as SwiftTocId,
  layoutName as SwiftTocName,
  Schema as SwiftTocSchema,
} from "./swift/TableOfContents";
import TableorChart, {
  layoutDescription as TableChartDesc,
  layoutId as TableChartId,
  layoutName as TableChartName,
  Schema as TableChartSchema,
} from "./swift/TableorChart";
import Timeline, {
  layoutDescription as TimelineDesc,
  layoutId as TimelineId,
  layoutName as TimelineName,
  Schema as TimelineSchema,
} from "./swift/Timeline";

// neo swift templates
import TitleCenteredChartLayout, {
  layoutDescription as TitleCenteredChartDesc,
  layoutId as TitleCenteredChartId,
  layoutName as TitleCenteredChartName,
  Schema as TitleCenteredChartSchema,
} from "./neo-swift/TitleCenteredChart";
import TitleChartMetricsSidebarLayout, {
  layoutDescription as TitleChartMetricsSidebarDesc,
  layoutId as TitleChartMetricsSidebarId,
  layoutName as TitleChartMetricsSidebarName,
  Schema as TitleChartMetricsSidebarSchema,
} from "./neo-swift/TitleChartMetricsSidebar";
import TitleDescriptionBulletListLayout, {
  layoutDescription as TitleDescriptionBulletListDesc,
  layoutId as TitleDescriptionBulletListId,
  layoutName as TitleDescriptionBulletListName,
  Schema as TitleDescriptionBulletListSchema,
} from "./neo-swift/TitleDescriptionBulletList";
import TitleDescriptionDataTableLayout, {
  layoutDescription as TitleDescriptionDataTableDesc,
  layoutId as TitleDescriptionDataTableId,
  layoutName as TitleDescriptionDataTableName,
  Schema as TitleDescriptionDataTableSchema,
} from "./neo-swift/TitleDescriptionDataTable";
import TitleDescriptionImageRightSwiftLayout, {
  layoutDescription as TitleDescriptionImageRightSwiftDesc,
  layoutId as TitleDescriptionImageRightSwiftId,
  layoutName as TitleDescriptionImageRightSwiftName,
  Schema as TitleDescriptionImageRightSwiftSchema,
} from "./neo-swift/TitleDescriptionImageRight";

import TitleDescriptionFourChartsSixBulletsLayout, {
  layoutDescription as TitleDescriptionFourChartsSixBulletsDesc,
  layoutId as TitleDescriptionFourChartsSixBulletsId,
  layoutName as TitleDescriptionFourChartsSixBulletsName,
  Schema as TitleDescriptionFourChartsSixBulletsSchema,
} from "./neo-swift/TitleDescriptionFourChartsSixBullets";
import TitleDescriptionMetricsGridLayout, {
  layoutDescription as TitleDescriptionMetricsGridDesc,
  layoutId as TitleDescriptionMetricsGridId,
  layoutName as TitleDescriptionMetricsGridName,
  Schema as TitleDescriptionMetricsGridSchema,
} from "./neo-swift/TitleDescriptionMetricsGrid";
import TitleDescriptionMetricsGridImageLayout, {
  layoutDescription as TitleDescriptionMetricsGridImageDesc,
  layoutId as TitleDescriptionMetricsGridImageId,
  layoutName as TitleDescriptionMetricsGridImageName,
  Schema as TitleDescriptionMetricsGridImageSchema,
} from "./neo-swift/TitleDescriptionMetricsGridImage";
import TitleDescriptionSixChartsFourMetricsLayout, {
  layoutDescription as TitleDescriptionSixChartsFourMetricsDesc,
  layoutId as TitleDescriptionSixChartsFourMetricsId,
  layoutName as TitleDescriptionSixChartsFourMetricsName,
  Schema as TitleDescriptionSixChartsFourMetricsSchema,
} from "./neo-swift/TitleDescriptionSixChartsFourMetrics";
import TitleDescriptionSixChartsGridLayout, {
  layoutDescription as TitleDescriptionSixChartsGridDesc,
  layoutId as TitleDescriptionSixChartsGridId,
  layoutName as TitleDescriptionSixChartsGridName,
  Schema as TitleDescriptionSixChartsGridSchema,
} from "./neo-swift/TitleDescriptionSixChartsGrid";
import TitleDualComparisionBlockLayout, {
  layoutDescription as TitleDualComparisionBlockDesc,
  layoutId as TitleDualComparisionBlockId,
  layoutName as TitleDualComparisionBlockName,
  Schema as TitleDualComparisionBlockSchema,
} from "./neo-swift/TitleDualComparisonBlocks";
import TitleLabelDescriptionStatCardsLayout, {
  layoutDescription as TitleLabelDescriptionStatCardsDesc,
  layoutId as TitleLabelDescriptionStatCardsId,
  layoutName as TitleLabelDescriptionStatCardsName,
  Schema as TitleLabelDescriptionStatCardsSchema,
} from "./neo-swift/TitleLabelDescriptionStatCards";
import TitleSubtitleTeamMemberCardsLayout, {
  layoutDescription as TitleSubtitleTeamMemberCardsDesc,
  layoutId as TitleSubtitleTeamMemberCardsId,
  layoutName as TitleSubtitleTeamMemberCardsName,
  Schema as TitleSubtitleTeamMemberCardsSchema,
} from "./neo-swift/TitleSubtitleTeamMemberCards";
import TitleTaglineDescriptionNumberedStepsLayout, {
  layoutDescription as TitleTaglineDescriptionNumberedStepsDesc,
  layoutId as TitleTaglineDescriptionNumberedStepsId,
  layoutName as TitleTaglineDescriptionNumberedStepsName,
  Schema as TitleTaglineDescriptionNumberedStepsSchema,
} from "./neo-swift/TitleTaglineDescriptionNumberedSteps";
import TitleThreeByThreeMetricsGridLayout, {
  layoutDescription as TitleThreeByThreeMetricsGridDesc,
  layoutId as TitleThreeByThreeMetricsGridId,
  layoutName as TitleThreeByThreeMetricsGridName,
  Schema as TitleThreeByThreeMetricsGridSchema,
} from "./neo-swift/TitleThreeByThreeMetricsGrid";

// TCB
import SlideLayout4, {
  layoutDescription as SlideLayout4Desc,
  layoutId as SlideLayout4Id,
  layoutName as SlideLayout4Name,
  Schema as SlideLayout4Schema,
} from "./tcb/ConceptDevelopmentBulletPointSlideLayout";
import SlideLayout5, {
  layoutDescription as SlideLayout5Desc,
  layoutId as SlideLayout5Id,
  layoutName as SlideLayout5Name,
  Schema as SlideLayout5Schema,
} from "./tcb/ConceptDevelopmentDescriptionSlideLayout";
import SlideLayout6, {
  layoutDescription as SlideLayout6Desc,
  layoutId as SlideLayout6Id,
  layoutName as SlideLayout6Name,
  Schema as SlideLayout6Schema,
} from "./tcb/IndependentLearningSlideLayout";
import SlideLayout1, {
  layoutDescription as SlideLayout1Desc,
  layoutId as SlideLayout1Id,
  layoutName as SlideLayout1Name,
  Schema as SlideLayout1Schema,
} from "./tcb/IntroSlideLayout";
import SlideLayout2, {
  layoutDescription as SlideLayout2Desc,
  layoutId as SlideLayout2Id,
  layoutName as SlideLayout2Name,
  Schema as SlideLayout2Schema,
} from "./tcb/LearningObjectivesSlideLayout";
import SlideLayout8, {
  layoutDescription as SlideLayout8Desc,
  layoutId as SlideLayout8Id,
  layoutName as SlideLayout8Name,
  Schema as SlideLayout8Schema,
} from "./tcb/QuestionAnsweredSlideLayout";
import SlideLayout7, {
  layoutDescription as SlideLayout7Desc,
  layoutId as SlideLayout7Id,
  layoutName as SlideLayout7Name,
  Schema as SlideLayout7Schema,
} from "./tcb/QuestionSlideLayout";
import SlideLayout3, {
  layoutDescription as SlideLayout3Desc,
  layoutId as SlideLayout3Id,
  layoutName as SlideLayout3Name,
  Schema as SlideLayout3Schema,
} from "./tcb/VocabularySlideLayout";

// TODO: Step 2: Import template settings Here (like the ones below)
// Template template settings
import generalSettings from "./general/settings.json";
import modernSettings from "./modern/settings.json";
import neoGeneralSettings from "./neo-general/settings.json";
import neoModernSettings from "./neo-modern/settings.json";
import neoStandardSettings from "./neo-standard/settings.json";
import neoSwiftSettings from "./neo-swift/settings.json";
import standardSettings from "./standard/settings.json";
import swiftSettings from "./swift/settings.json";
import tcbSettings from "./tcb/settings.json";

// Helper to create template entry

// TODO: Step 3: Create template entries for each template (like the ones below)

export const neoGeneralTemplates: TemplateWithData[] = [
  createTemplateEntry(
    TextSplitWithEmphasisBlockLayout,
    TextSplitWithEmphasisBlockSchema,
    TextSplitWithEmphasisBlockId,
    TextSplitWithEmphasisBlockName,
    TextSplitWithEmphasisBlockDesc,
    "neo-general",
    "TextSplitWithEmphasisBlock",
  ),
  createTemplateEntry(
    TitleWithGridBasedHeadingAndDescriptionLayout,
    TitleWithGridBasedHeadingAndDescriptionSchema,
    TitleWithGridBasedHeadingAndDescriptionId,
    TitleWithGridBasedHeadingAndDescriptionName,
    TitleWithGridBasedHeadingAndDescriptionDesc,
    "neo-general",
    "TitleWithGridBasedHeadingAndDescriptionLayout",
  ),

  createTemplateEntry(
    TitleWithFullWidthChartLayout,
    TitleWithFullWidthChartSchema,
    TitleWithFullWidthChartId,
    TitleWithFullWidthChartName,
    TitleWithFullWidthChartDesc,
    "neo-general",
    "TitleWithFullWidthChartLayout",
  ),
  createTemplateEntry(
    TitleMetricsWithChartLayout,
    TitleMetricsWithChartSchema,
    TitleMetricsWithChartId,
    TitleMetricsWithChartName,
    TitleMetricsWithChartDesc,
    "neo-general",
    "TitleMetricsWithChartLayout",
  ),

  createTemplateEntry(
    TitleTopDescriptionFourTeamMembersGridLayout,
    TitleTopDescriptionFourTeamMembersGridSchema,
    TitleTopDescriptionFourTeamMembersGridId,
    TitleTopDescriptionFourTeamMembersGridName,
    TitleTopDescriptionFourTeamMembersGridDesc,
    "neo-general",
    "TitleTopDescriptionFourTeamMembersGridLayout",
  ),
  createTemplateEntry(
    TitleThreeColumnRiskConstraintsLayout,
    TitleThreeColumnRiskConstraintsSchema,
    TitleThreeColumnRiskConstraintsId,
    TitleThreeColumnRiskConstraintsName,
    TitleThreeColumnRiskConstraintsDesc,
    "neo-general",
    "TitleThreeColumnRiskConstraintsLayout",
  ),
  createTemplateEntry(
    TitleMetricValueMetricLabelFunnelStagesLayout,
    TitleMetricValueMetricLabelFunnelStagesSchema,
    TitleMetricValueMetricLabelFunnelStagesId,
    TitleMetricValueMetricLabelFunnelStagesName,
    TitleMetricValueMetricLabelFunnelStagesDesc,
    "neo-general",
    "TitleMetricValueMetricLabelFunnelStages",
  ),
  createTemplateEntry(
    ThankYouContactInfoFooterImageSlideLayout,
    ThankYouContactInfoFooterImageSlideSchema,
    ThankYouContactInfoFooterImageSlideId,
    ThankYouContactInfoFooterImageSlideName,
    ThankYouContactInfoFooterImageSlideDesc,
    "neo-general",
    "ThankYouContactInfoFooterImageSlideLayout",
  ),
  createTemplateEntry(
    TimelineLayout,
    TimelineLayoutSchema,
    TimelineLayoutId,
    TimelineLayoutName,
    TimelineLayoutDesc,
    "neo-general",
    "TimelineLayoutLayout",
  ),

  createTemplateEntry(
    IndexedThreeColumnListLayout,
    IndexedThreeColumnListSchema,
    IndexedThreeColumnListId,
    IndexedThreeColumnListName,
    IndexedThreeColumnListDesc,
    "neo-general",
    "IndexedThreeColumnListLayout",
  ),
  createTemplateEntry(
    LayoutTextBlockWithMetricCardsLayout,
    LayoutTextBlockWithMetricCardsSchema,
    LayoutTextBlockWithMetricCardsId,
    LayoutTextBlockWithMetricCardsName,
    LayoutTextBlockWithMetricCardsDesc,
    "neo-general",
    "LayoutTextBlockWithMetricCardsLayout",
  ),
  createTemplateEntry(
    LeftAlignQuotesLayout,
    LeftAlignQuotesSchema,
    LeftAlignQuotesId,
    LeftAlignQuotesName,
    LeftAlignQuotesDesc,
    "neo-general",
    "LeftAlignQuotesLayout",
  ),
  createTemplateEntry(
    TitleDescriptionWithTableLayout,
    TitleDescriptionWithTableSchema,
    TitleDescriptionWithTableId,
    TitleDescriptionWithTableName,
    TitleDescriptionWithTableDesc,
    "neo-general",
    "TitleDescriptionWithTableLayout",
  ),
  createTemplateEntry(
    ChallengeAndOutcomeWithOneStatLayout,
    ChallengeAndOutcomeWithOneStatSchema,
    ChallengeAndOutcomeWithOneStatId,
    ChallengeAndOutcomeWithOneStatName,
    ChallengeAndOutcomeWithOneStatDesc,
    "neo-general",
    "ChallengeAndOutcomeWithOneStatLayout",
  ),
  createTemplateEntry(
    GridBasedEightMetricsSnapshotsLayout,
    GridBasedEightMetricsSnapshotsSchema,
    GridBasedEightMetricsSnapshotsId,
    GridBasedEightMetricsSnapshotsName,
    GridBasedEightMetricsSnapshotsDesc,
    "neo-general",
    "GridBasedEightMetricsSnapshotsLayout",
  ),

  createTemplateEntry(
    HeadlineTextWithBulletsAndStatsLayout,
    HeadlineTextWithBulletsAndStatsSchema,
    HeadlineTextWithBulletsAndStatsId,
    HeadlineTextWithBulletsAndStatsName,
    HeadlineTextWithBulletsAndStatsDesc,
    "neo-general",
    "HeadlineTextWithBulletsAndStatsLayout",
  ),
  createTemplateEntry(
    HeadlineDescriptionWithImageLayout,
    HeadlineDescriptionWithImageSchema,
    HeadlineDescriptionWithImageId,
    HeadlineDescriptionWithImageName,
    HeadlineDescriptionWithImageDesc,
    "neo-general",
    "HeadlineDescriptionWithImageLayout",
  ),
  createTemplateEntry(
    HeadlineDescriptionWithDoubleImageLayout,
    HeadlineDescriptionWithDoubleImageSchema,
    HeadlineDescriptionWithDoubleImageId,
    HeadlineDescriptionWithDoubleImageName,
    HeadlineDescriptionWithDoubleImageDesc,
    "neo-general",
    "HeadlineDescriptionWithDoubleImageLayout",
  ),

  createTemplateEntry(
    BulletIconsOnlySlideNeoGeneralLayout,
    BulletIconsOnlyNeoGeneralSchema,
    BulletIconsOnlyNeoGeneralId,
    BulletIconsOnlyNeoGeneralName,
    BulletIconsOnlyNeoGeneralDesc,
    "neo-general",
    "BulletIconsOnlySlideLayout",
  ),
  createTemplateEntry(
    BulletWithIconsSlideNeoGeneralLayout,
    BulletWithIconsNeoGeneralSchema,
    BulletWithIconsNeoGeneralId,
    BulletWithIconsNeoGeneralName,
    BulletWithIconsNeoGeneralDesc,
    "neo-general",
    "BulletWithIconsSlideLayout",
  ),
  createTemplateEntry(
    ChartWithBulletsSlideNeoGeneralLayout,
    ChartWithBulletsNeoGeneralSchema,
    ChartWithBulletsNeoGeneralId,
    ChartWithBulletsNeoGeneralName,
    ChartWithBulletsNeoGeneralDesc,
    "neo-general",
    "ChartWithBulletsSlideLayout",
  ),

  createTemplateEntry(
    MetricsWithImageSlideNeoGeneralLayout,
    MetricsWithImageNeoGeneralSchema,
    MetricsWithImageNeoGeneralId,
    MetricsWithImageNeoGeneralName,
    MetricsWithImageNeoGeneralDesc,
    "neo-general",
    "MetricsWithImageSlideLayout",
  ),
  createTemplateEntry(
    NumberedBulletsSlideNeoGeneralLayout,
    NumberedBulletsNeoGeneralSchema,
    NumberedBulletsNeoGeneralId,
    NumberedBulletsNeoGeneralName,
    NumberedBulletsNeoGeneralDesc,
    "neo-general",
    "NumberedBulletsSlideLayout",
  ),
  createTemplateEntry(
    QuoteSlideNeoGeneralLayout,
    QuoteNeoGeneralSchema,
    QuoteNeoGeneralId,
    QuoteNeoGeneralName,
    QuoteNeoGeneralDesc,
    "neo-general",
    "QuoteSlideLayout",
  ),

  createTemplateEntry(
    TableOfContentWithoutPageNumberLayout,
    TableOfContentWithoutPageNumberSchema,
    TableOfContentWithoutPageNumberId,
    TableOfContentWithoutPageNumberName,
    TableOfContentWithoutPageNumberDesc,
    "neo-general",
    "TableOfContentWithoutPageNumber",
  ),

  createTemplateEntry(
    TeamSlideNeoGeneralLayout,
    TeamNeoGeneralSchema,
    TeamNeoGeneralId,
    TeamNeoGeneralName,
    TeamNeoGeneralDesc,
    "neo-general",
    "TeamSlideLayout",
  ),
  createTemplateEntry(
    MultiChartGridSlideLayout,
    MultiChartGridSlideSchema,
    MultiChartGridSlideId,
    MultiChartGridSlideName,
    MultiChartGridSlideDesc,
    "neo-general",
    "MultiChartGridSlideLayout",
  ),
  createTemplateEntry(
    TitleDescriptionMultiChartGridWithMetricsLayout,
    TitleDescriptionMultiChartGridWithMetricsSchema,
    TitleDescriptionMultiChartGridWithMetricsId,
    TitleDescriptionMultiChartGridWithMetricsName,
    TitleDescriptionMultiChartGridWithMetricsDesc,
    "neo-general",
    "TitleDescriptionMultiChartGridWithMetrics",
  ),
  createTemplateEntry(
    TitleDescriptionMultiChartGridWithBulletsLayout,
    TitleDescriptionMultiChartGridWithBulletsSchema,
    TitleDescriptionMultiChartGridWithBulletsId,
    TitleDescriptionMultiChartGridWithBulletsName,
    TitleDescriptionMultiChartGridWithBulletsDesc,
    "neo-general",
    "TitleDescriptionMultiChartGridWithBullets",
  ),
];

export const neoStandardTemplates: TemplateWithData[] = [
  createTemplateEntry(
    TitleBadgeChartLayout,
    TitleBadgeChartSchema,
    TitleBadgeChartId,
    TitleBadgeChartName,
    TitleBadgeChartDesc,
    "neo-standard",
    "TitleBadgeChartLayout",
  ),
  createTemplateEntry(
    TitleDescriptionBulletListStandardLayout,
    TitleDescriptionBulletListStandardSchema,
    TitleDescriptionBulletListStandardId,
    TitleDescriptionBulletListStandardName,
    TitleDescriptionBulletListStandardDesc,
    "neo-standard",
    "TitleDescriptionBulletList",
  ),
  createTemplateEntry(
    TitleDescriptionContactCardsLayout,
    TitleDescriptionContactCardsSchema,
    TitleDescriptionContactCardsId,
    TitleDescriptionContactCardsName,
    TitleDescriptionContactCardsDesc,
    "neo-standard",
    "TitleDescriptionContactCardsLayout",
  ),
  createTemplateEntry(
    TitleDescriptionIconListLayout,
    TitleDescriptionIconListSchema,
    TitleDescriptionIconListId,
    TitleDescriptionIconListName,
    TitleDescriptionIconListDesc,
    "neo-standard",
    "TitleDescriptionIconListLayout",
  ),
  createTemplateEntry(
    TitleDescriptionImageRightLayout,
    TitleDescriptionImageRightSchema,
    TitleDescriptionImageRightId,
    TitleDescriptionImageRightName,
    TitleDescriptionImageRightDesc,
    "neo-standard",
    "TitleDescriptionImageRightLayout",
  ),
  createTemplateEntry(
    TitleDescriptionRadialCardsLayout,
    TitleDescriptionRadialCardsSchema,
    TitleDescriptionRadialCardsId,
    TitleDescriptionRadialCardsName,
    TitleDescriptionRadialCardsDesc,
    "neo-standard",
    "TitleDescriptionRadialCardsLayout",
  ),
  createTemplateEntry(
    TitleDescriptionTableLayout,
    TitleDescriptionTableSchema,
    TitleDescriptionTableId,
    TitleDescriptionTableName,
    TitleDescriptionTableDesc,
    "neo-standard",
    "TitleDescriptionTableLayout",
  ),
  createTemplateEntry(
    TitleDescriptionTimelineLayout,
    TitleDescriptionTimelineSchema,
    TitleDescriptionTimelineId,
    TitleDescriptionTimelineName,
    TitleDescriptionTimelineDesc,
    "neo-standard",
    "TitleDescriptionTimelineLayout",
  ),
  createTemplateEntry(
    TitleDualChartsComparisonLayout,
    TitleDualChartsComparisonSchema,
    TitleDualChartsComparisonId,
    TitleDualChartsComparisonName,
    TitleDualChartsComparisonDesc,
    "neo-standard",
    "TitleDualChartsComparisonLayout",
  ),
  createTemplateEntry(
    TitleDualComparisonCardsLayout,
    TitleDualComparisonCardsSchema,
    TitleDualComparisonCardsId,
    TitleDualComparisonCardsName,
    TitleDualComparisonCardsDesc,
    "neo-standard",
    "TitleDualComparisonCardsLayout",
  ),
  createTemplateEntry(
    TitleKpiGridLayout,
    TitleKpiGridSchema,
    TitleKpiGridId,
    TitleKpiGridName,
    TitleKpiGridDesc,
    "neo-standard",
    "TitleKpiGridLayout",
  ),
  createTemplateEntry(
    TitleMetricsChartLayout,
    TitleMetricsChartSchema,
    TitleMetricsChartId,
    TitleMetricsChartName,
    TitleMetricsChartDesc,
    "neo-standard",
    "TitleMetricsChartLayout",
  ),
  createTemplateEntry(
    TitleMetricsImageLayout,
    TitleMetricsImageSchema,
    TitleMetricsImageId,
    TitleMetricsImageName,
    TitleMetricsImageDesc,
    "neo-standard",
    "TitleMetricsImageLayout",
  ),
  createTemplateEntry(
    TitlePointsDonutGridLayout,
    TitlePointsDonutGridSchema,
    TitlePointsDonutGridId,
    TitlePointsDonutGridName,
    TitlePointsDonutGridDesc,
    "neo-standard",
    "TitlePointsDonutGridLayout",
  ),
  createTemplateEntry(
    TitleDescriptionMultiChartGridStandardLayout,
    TitleDescriptionMultiChartGridStandardSchema,
    TitleDescriptionMultiChartGridStandardId,
    TitleDescriptionMultiChartGridStandardName,
    TitleDescriptionMultiChartGridStandardDesc,
    "neo-standard",
    "TitleDescriptionMultiChartGrid",
  ),
  createTemplateEntry(
    TitleDescriptionMultiChartGridWithMetricsStandardLayout,
    TitleDescriptionMultiChartGridWithMetricsStandardSchema,
    TitleDescriptionMultiChartGridWithMetricsStandardId,
    TitleDescriptionMultiChartGridWithMetricsStandardName,
    TitleDescriptionMultiChartGridWithMetricsStandardDesc,
    "neo-standard",
    "TitleDescriptionMultiChartGridWithMetrics",
  ),
  createTemplateEntry(
    TitleDescriptionMultiChartGridWithBulletsStandardLayout,
    TitleDescriptionMultiChartGridWithBulletsStandardSchema,
    TitleDescriptionMultiChartGridWithBulletsStandardId,
    TitleDescriptionMultiChartGridWithBulletsStandardName,
    TitleDescriptionMultiChartGridWithBulletsStandardDesc,
    "neo-standard",
    "TitleDescriptionMultiChartGridWithBullets",
  ),
];
export const neoModernTemplates: TemplateWithData[] = [
  createTemplateEntry(
    TitleDescriptionBulletListModernLayout,
    TitleDescriptionBulletListModernSchema,
    TitleDescriptionBulletListModernId,
    TitleDescriptionBulletListModernName,
    TitleDescriptionBulletListModernDesc,
    "neo-modern",
    "TitleDescriptionBulletList",
  ),
  createTemplateEntry(
    TitleDescriptionContactListLayout,
    TitleDescriptionContactListSchema,
    TitleDescriptionContactListId,
    TitleDescriptionContactListName,
    TitleDescriptionContactListDesc,
    "neo-modern",
    "TitleDescriptionContactListLayout",
  ),
  createTemplateEntry(
    TitleDescriptionDualMetricsGridLayout,
    TitleDescriptionDualMetricsGridSchema,
    TitleDescriptionDualMetricsGridId,
    TitleDescriptionDualMetricsGridName,
    TitleDescriptionDualMetricsGridDesc,
    "neo-modern",
    "TitleDescriptionDualMetricsGridLayout",
  ),
  createTemplateEntry(
    TitleDescriptionIconTimelineLayout,
    TitleDescriptionIconTimelineSchema,
    TitleDescriptionIconTimelineId,
    TitleDescriptionIconTimelineName,
    TitleDescriptionIconTimelineDesc,
    "neo-modern",
    "TitleDescriptionIconTimelineLayout",
  ),
  createTemplateEntry(
    TitleDescriptionImageRightModernLayout,
    TitleDescriptionImageRightModernSchema,
    TitleDescriptionImageRightModernId,
    TitleDescriptionImageRightModernName,
    TitleDescriptionImageRightModernDesc,
    "neo-modern",
    "TitleDescriptionImageRightModernLayout",
  ),
  createTemplateEntry(
    TitleDescriptionMetricsChartLayout,
    TitleDescriptionMetricsChartSchema,
    TitleDescriptionMetricsChartId,
    TitleDescriptionMetricsChartName,
    TitleDescriptionMetricsChartDesc,
    "neo-modern",
    "TitleDescriptionMetricsChartLayout",
  ),
  createTemplateEntry(
    TitleDescriptionMetricsImageLayout,
    TitleDescriptionMetricsImageSchema,
    TitleDescriptionMetricsImageId,
    TitleDescriptionMetricsImageName,
    TitleDescriptionMetricsImageDesc,
    "neo-modern",
    "TitleDescriptionMetricsImageLayout",
  ),
  createTemplateEntry(
    TitleDescriptionMetricsTableLayout,
    TitleDescriptionMetricsTableSchema,
    TitleDescriptionMetricsTableId,
    TitleDescriptionMetricsTableName,
    TitleDescriptionMetricsTableDesc,
    "neo-modern",
    "TitleDescriptionMetricsTableLayout",
  ),
  createTemplateEntry(
    TitleDualComparisonChartsLayout,
    TitleDualComparisonChartsSchema,
    TitleDualComparisonChartsId,
    TitleDualComparisonChartsName,
    TitleDualComparisonChartsDesc,
    "neo-modern",
    "TitleDualComparisonChartsLayout",
  ),
  createTemplateEntry(
    TitleDualComparisonCardsModernLayout,
    TitleDualComparisonCardsModernSchema,
    TitleDualComparisonCardsModernId,
    TitleDualComparisonCardsModernName,
    TitleDualComparisonCardsModernDesc,
    "neo-modern",
    "TitleDualComparisonCardsModernLayout",
  ),
  createTemplateEntry(
    TitleHorizontalAltenenatingTimelineLayout,
    TitleHorizontalAltenenatingTimelineSchema,
    TitleHorizontalAltenenatingTimelineId,
    TitleHorizontalAltenenatingTimelineName,
    TitleHorizontalAltenenatingTimelineDesc,
    "neo-modern",
    "TitleHorizontalAltenenatingTimelineLayout",
  ),
  createTemplateEntry(
    TitleKpiSnapshotGridLayout,
    TitleKpiSnapshotGridSchema,
    TitleKpiSnapshotGridId,
    TitleKpiSnapshotGridName,
    TitleKpiSnapshotGridDesc,
    "neo-modern",
    "TitleKpiSnapshotGridLayout",
  ),
  createTemplateEntry(
    TitleSubtitlesChartLayout,
    TitleSubtitlesChartSchema,
    TitleSubtitlesChartId,
    TitleSubtitlesChartName,
    TitleSubtitlesChartDesc,
    "neo-modern",
    "TitleSubtitlesChartLayout",
  ),
  createTemplateEntry(
    TitleTwoColumnNumberListLayout,
    TitleTwoColumnNumberListSchema,
    TitleTwoColumnNumberListId,
    TitleTwoColumnNumberListName,
    TitleTwoColumnNumberListDesc,
    "neo-modern",
    "TitleTwoColumnNumberListLayout",
  ),
  createTemplateEntry(
    TitleDescriptionMultiChartGridLayout,
    TitleDescriptionMultiChartGridSchema,
    TitleDescriptionMultiChartGridId,
    TitleDescriptionMultiChartGridName,
    TitleDescriptionMultiChartGridDesc,
    "neo-modern",
    "TitleDescriptionMultiChartGrid",
  ),
  createTemplateEntry(
    TitleDescriptionMultiChartGridWithMetricsModernLayout,
    TitleDescriptionMultiChartGridWithMetricsModernSchema,
    TitleDescriptionMultiChartGridWithMetricsModernId,
    TitleDescriptionMultiChartGridWithMetricsModernName,
    TitleDescriptionMultiChartGridWithMetricsModernDesc,
    "neo-modern",
    "TitleDescriptionMultiChartGridWithMetrics",
  ),
  createTemplateEntry(
    TitleDescriptionMultiChartGridWithBulletsModernLayout,
    TitleDescriptionMultiChartGridWithBulletsModernSchema,
    TitleDescriptionMultiChartGridWithBulletsModernId,
    TitleDescriptionMultiChartGridWithBulletsModernName,
    TitleDescriptionMultiChartGridWithBulletsModernDesc,
    "neo-modern",
    "TitleDescriptionMultiChartGridWithBullets",
  ),
];
export const neoSwiftTemplates: TemplateWithData[] = [
  createTemplateEntry(
    TitleCenteredChartLayout,
    TitleCenteredChartSchema,
    TitleCenteredChartId,
    TitleCenteredChartName,
    TitleCenteredChartDesc,
    "neo-swift",
    "TitleCenteredChartLayout",
  ),
  createTemplateEntry(
    TitleChartMetricsSidebarLayout,
    TitleChartMetricsSidebarSchema,
    TitleChartMetricsSidebarId,
    TitleChartMetricsSidebarName,
    TitleChartMetricsSidebarDesc,
    "neo-swift",
    "TitleChartMetricsSidebarLayout",
  ),
  createTemplateEntry(
    TitleDescriptionBulletListLayout,
    TitleDescriptionBulletListSchema,
    TitleDescriptionBulletListId,
    TitleDescriptionBulletListName,
    TitleDescriptionBulletListDesc,
    "neo-swift",
    "TitleDescriptionBulletListLayout",
  ),
  createTemplateEntry(
    TitleDescriptionDataTableLayout,
    TitleDescriptionDataTableSchema,
    TitleDescriptionDataTableId,
    TitleDescriptionDataTableName,
    TitleDescriptionDataTableDesc,
    "neo-swift",
    "TitleDescriptionDataTableLayout",
  ),
  createTemplateEntry(
    TitleDescriptionImageRightSwiftLayout,
    TitleDescriptionImageRightSwiftSchema,
    TitleDescriptionImageRightSwiftId,
    TitleDescriptionImageRightSwiftName,
    TitleDescriptionImageRightSwiftDesc,
    "neo-swift",
    "TitleDescriptionImageRightSwiftLayout",
  ),
  createTemplateEntry(
    TitleDescriptionMetricsGridLayout,
    TitleDescriptionMetricsGridSchema,
    TitleDescriptionMetricsGridId,
    TitleDescriptionMetricsGridName,
    TitleDescriptionMetricsGridDesc,
    "neo-swift",
    "TitleDescriptionMetricsGridLayout",
  ),
  createTemplateEntry(
    TitleDescriptionMetricsGridImageLayout,
    TitleDescriptionMetricsGridImageSchema,
    TitleDescriptionMetricsGridImageId,
    TitleDescriptionMetricsGridImageName,
    TitleDescriptionMetricsGridImageDesc,
    "neo-swift",
    "TitleDescriptionMetricsGridImageLayout",
  ),
  createTemplateEntry(
    TitleDualComparisionBlockLayout,
    TitleDualComparisionBlockSchema,
    TitleDualComparisionBlockId,
    TitleDualComparisionBlockName,
    TitleDualComparisionBlockDesc,
    "neo-swift",
    "TitleDualComparisionBlockLayout",
  ),
  createTemplateEntry(
    TitleLabelDescriptionStatCardsLayout,
    TitleLabelDescriptionStatCardsSchema,
    TitleLabelDescriptionStatCardsId,
    TitleLabelDescriptionStatCardsName,
    TitleLabelDescriptionStatCardsDesc,
    "neo-swift",
    "TitleLabelDescriptionStatCardsLayout",
  ),
  createTemplateEntry(
    TitleSubtitleTeamMemberCardsLayout,
    TitleSubtitleTeamMemberCardsSchema,
    TitleSubtitleTeamMemberCardsId,
    TitleSubtitleTeamMemberCardsName,
    TitleSubtitleTeamMemberCardsDesc,
    "neo-swift",
    "TitleSubtitleTeamMemberCardsLayout",
  ),
  createTemplateEntry(
    TitleTaglineDescriptionNumberedStepsLayout,
    TitleTaglineDescriptionNumberedStepsSchema,
    TitleTaglineDescriptionNumberedStepsId,
    TitleTaglineDescriptionNumberedStepsName,
    TitleTaglineDescriptionNumberedStepsDesc,
    "neo-swift",
    "TitleTaglineDescriptionNumberedStepsLayout",
  ),
  createTemplateEntry(
    TitleThreeByThreeMetricsGridLayout,
    TitleThreeByThreeMetricsGridSchema,
    TitleThreeByThreeMetricsGridId,
    TitleThreeByThreeMetricsGridName,
    TitleThreeByThreeMetricsGridDesc,
    "neo-swift",
    "TitleThreeByThreeMetricsGridLayout",
  ),
  createTemplateEntry(
    TitleDescriptionSixChartsGridLayout,
    TitleDescriptionSixChartsGridSchema,
    TitleDescriptionSixChartsGridId,
    TitleDescriptionSixChartsGridName,
    TitleDescriptionSixChartsGridDesc,
    "neo-swift",
    "TitleDescriptionSixChartsGridLayout",
  ),
  createTemplateEntry(
    TitleDescriptionSixChartsFourMetricsLayout,
    TitleDescriptionSixChartsFourMetricsSchema,
    TitleDescriptionSixChartsFourMetricsId,
    TitleDescriptionSixChartsFourMetricsName,
    TitleDescriptionSixChartsFourMetricsDesc,
    "neo-swift",
    "TitleDescriptionSixChartsFourMetricsLayout",
  ),
  createTemplateEntry(
    TitleDescriptionFourChartsSixBulletsLayout,
    TitleDescriptionFourChartsSixBulletsSchema,
    TitleDescriptionFourChartsSixBulletsId,
    TitleDescriptionFourChartsSixBulletsName,
    TitleDescriptionFourChartsSixBulletsDesc,
    "neo-swift",
    "TitleDescriptionFourChartsSixBulletsLayout",
  ),
];

// General templates array
export const generalTemplates: TemplateWithData[] = [
  createTemplateEntry(
    GeneralIntroSlideLayout,
    GeneralIntroSchema,
    GeneralIntroId,
    GeneralIntroName,
    GeneralIntroDesc,
    "general",
    "IntroSlideLayout",
  ),
  createTemplateEntry(
    BasicInfoSlideLayout,
    BasicInfoSchema,
    BasicInfoId,
    BasicInfoName,
    BasicInfoDesc,
    "general",
    "BasicInfoSlideLayout",
  ),
  createTemplateEntry(
    BulletIconsOnlySlideLayout,
    BulletIconsOnlySchema,
    BulletIconsOnlyId,
    BulletIconsOnlyName,
    BulletIconsOnlyDesc,
    "general",
    "BulletIconsOnlySlideLayout",
  ),
  createTemplateEntry(
    BulletWithIconsSlideLayout,
    BulletWithIconsSchema,
    BulletWithIconsId,
    BulletWithIconsName,
    BulletWithIconsDesc,
    "general",
    "BulletWithIconsSlideLayout",
  ),
  createTemplateEntry(
    ChartWithBulletsSlideLayout,
    ChartWithBulletsSchema,
    ChartWithBulletsId,
    ChartWithBulletsName,
    ChartWithBulletsDesc,
    "general",
    "ChartWithBulletsSlideLayout",
  ),
  createTemplateEntry(
    MetricsSlideLayout,
    MetricsSchema,
    MetricsId,
    MetricsName,
    MetricsDesc,
    "general",
    "MetricsSlideLayout",
  ),
  createTemplateEntry(
    MetricsWithImageSlideLayout,
    MetricsWithImageSchema,
    MetricsWithImageId,
    MetricsWithImageName,
    MetricsWithImageDesc,
    "general",
    "MetricsWithImageSlideLayout",
  ),
  createTemplateEntry(
    NumberedBulletsSlideLayout,
    NumberedBulletsSchema,
    NumberedBulletsId,
    NumberedBulletsName,
    NumberedBulletsDesc,
    "general",
    "NumberedBulletsSlideLayout",
  ),
  createTemplateEntry(
    QuoteSlideLayout,
    QuoteSchema,
    QuoteId,
    QuoteName,
    QuoteDesc,
    "general",
    "QuoteSlideLayout",
  ),
  createTemplateEntry(
    TableInfoSlideLayout,
    TableInfoSchema,
    TableInfoId,
    TableInfoName,
    TableInfoDesc,
    "general",
    "TableInfoSlideLayout",
  ),
  createTemplateEntry(
    TableOfContentsSlideLayout,
    TableOfContentsSchema,
    TableOfContentsId,
    TableOfContentsName,
    TableOfContentsDesc,
    "general",
    "TableOfContentsSlideLayout",
  ),
  createTemplateEntry(
    TeamSlideLayout,
    TeamSchema,
    TeamId,
    TeamName,
    TeamDesc,
    "general",
    "TeamSlideLayout",
  ),
];

// Modern templates array
export const modernTemplates: TemplateWithData[] = [
  createTemplateEntry(
    ModernIntroSlideLayout,
    ModernIntroSchema,
    ModernIntroId,
    ModernIntroName,
    ModernIntroDesc,
    "modern",
    "IntroSlideLayout",
  ),
  createTemplateEntry(
    BulletsWithIconsDescriptionGrid,
    BulletsIconsGridSchema,
    BulletsIconsGridId,
    BulletsIconsGridName,
    BulletsIconsGridDesc,
    "modern",
    "BulletsWithIconsDescriptionGrid",
  ),
  createTemplateEntry(
    ModernBulletWithIconsSlideLayout,
    ModernBulletIconsSchema,
    ModernBulletIconsId,
    ModernBulletIconsName,
    ModernBulletIconsDesc,
    "modern",
    "BulletWithIconsSlideLayout",
  ),
  createTemplateEntry(
    ChartOrTableWithDescription,
    ChartTableDescSchema,
    ChartTableDescId,
    ChartTableDescName,
    ChartTableDescDesc,
    "modern",
    "ChartOrTableWithDescription",
  ),
  createTemplateEntry(
    ChartOrTableWithMetricsDescription,
    ChartMetricsSchema,
    ChartMetricsId,
    ChartMetricsName,
    ChartMetricsDesc,
    "modern",
    "ChartOrTableWithMetricsDescription",
  ),
  createTemplateEntry(
    ImageAndDescriptionLayout,
    ImageDescSchema,
    ImageDescId,
    ImageDescName,
    ImageDescDesc,
    "modern",
    "ImageAndDescriptionLayout",
  ),
  createTemplateEntry(
    ImageListWithDescriptionSlideLayout,
    ImageListDescSchema,
    ImageListDescId,
    ImageListDescName,
    ImageListDescDesc,
    "modern",
    "ImageListWithDescriptionSlideLayout",
  ),
  createTemplateEntry(
    ImagesWithDescriptionLayout,
    ImagesDescSchema,
    ImagesDescId,
    ImagesDescName,
    ImagesDescDesc,
    "modern",
    "ImagesWithDescriptionLayout",
  ),
  createTemplateEntry(
    MetricsWithDescription,
    MetricsDescSchema,
    MetricsDescId,
    MetricsDescName,
    MetricsDescDesc,
    "modern",
    "MetricsWithDescription",
  ),
  createTemplateEntry(
    ModernTableOfContentsLayout,
    ModernTocSchema,
    ModernTocId,
    ModernTocName,
    ModernTocDesc,
    "modern",
    "TableOfContentsLayout",
  ),
];

// Standard templates array
export const standardTemplates: TemplateWithData[] = [
  createTemplateEntry(
    StandardIntroSlideLayout,
    StandardIntroSchema,
    StandardIntroId,
    StandardIntroName,
    StandardIntroDesc,
    "standard",
    "IntroSlideLayout",
  ),
  createTemplateEntry(
    ChartLeftTextRightLayout,
    ChartLeftSchema,
    ChartLeftId,
    ChartLeftName,
    ChartLeftDesc,
    "standard",
    "ChartLeftTextRightLayout",
  ),
  createTemplateEntry(
    ContactLayout,
    ContactSchema,
    ContactId,
    ContactName,
    ContactDesc,
    "standard",
    "ContactLayout",
  ),
  createTemplateEntry(
    HeadingBulletImageDescriptionLayout,
    HeadingBulletSchema,
    HeadingBulletId,
    HeadingBulletName,
    HeadingBulletDesc,
    "standard",
    "HeadingBulletImageDescriptionLayout",
  ),
  createTemplateEntry(
    IconBulletDescriptionLayout,
    IconBulletSchema,
    IconBulletId,
    IconBulletName,
    IconBulletDesc,
    "standard",
    "IconBulletDescriptionLayout",
  ),
  createTemplateEntry(
    IconImageDescriptionLayout,
    IconImageSchema,
    IconImageId,
    IconImageName,
    IconImageDesc,
    "standard",
    "IconImageDescriptionLayout",
  ),
  createTemplateEntry(
    StandardImageListWithDescriptionLayout,
    StdImageListSchema,
    StdImageListId,
    StdImageListName,
    StdImageListDesc,
    "standard",
    "ImageListWithDescriptionLayout",
  ),
  createTemplateEntry(
    MetricsDescriptionLayout,
    MetricsDescLayoutSchema,
    MetricsDescLayoutId,
    MetricsDescLayoutName,
    MetricsDescLayoutDesc,
    "standard",
    "MetricsDescriptionLayout",
  ),
  createTemplateEntry(
    NumberedBulletSingleImageLayout,
    NumBulletImgSchema,
    NumBulletImgId,
    NumBulletImgName,
    NumBulletImgDesc,
    "standard",
    "NumberedBulletSingleImageLayout",
  ),
  createTemplateEntry(
    StandardTableOfContentsLayout,
    StdTocSchema,
    StdTocId,
    StdTocName,
    StdTocDesc,
    "standard",
    "TableOfContentsLayout",
  ),
  createTemplateEntry(
    VisualMetricsSlideLayout,
    VisualMetricsSchema,
    VisualMetricsId,
    VisualMetricsName,
    VisualMetricsDesc,
    "standard",
    "VisualMetricsSlideLayout",
  ),
];

// Swift templates array
export const swiftTemplates: TemplateWithData[] = [
  createTemplateEntry(
    SwiftIntroSlideLayout,
    SwiftIntroSchema,
    SwiftIntroId,
    SwiftIntroName,
    SwiftIntroDesc,
    "swift",
    "IntroSlideLayout",
  ),
  createTemplateEntry(
    BulletsWithIconsTitleDescription,
    BulletsIconsTitleSchema,
    BulletsIconsTitleId,
    BulletsIconsTitleName,
    BulletsIconsTitleDesc,
    "swift",
    "BulletsWithIconsTitleDescription",
  ),
  createTemplateEntry(
    IconBulletListDescription,
    IconBulletListSchema,
    IconBulletListId,
    IconBulletListName,
    IconBulletListDesc,
    "swift",
    "IconBulletListDescription",
  ),
  createTemplateEntry(
    ImageListDescription,
    ImageListSchema,
    ImageListId,
    ImageListName,
    ImageListDesc,
    "swift",
    "ImageListDescription",
  ),
  createTemplateEntry(
    MetricsNumbers,
    MetricsNumbersSchema,
    MetricsNumbersId,
    MetricsNumbersName,
    MetricsNumbersDesc,
    "swift",
    "MetricsNumbers",
  ),
  createTemplateEntry(
    SimpleBulletPointsLayout,
    SimpleBulletSchema,
    SimpleBulletId,
    SimpleBulletName,
    SimpleBulletDesc,
    "swift",
    "SimpleBulletPointsLayout",
  ),
  createTemplateEntry(
    SwiftTableOfContents,
    SwiftTocSchema,
    SwiftTocId,
    SwiftTocName,
    SwiftTocDesc,
    "swift",
    "TableOfContents",
  ),
  createTemplateEntry(
    TableorChart,
    TableChartSchema,
    TableChartId,
    TableChartName,
    TableChartDesc,
    "swift",
    "TableorChart",
  ),
  createTemplateEntry(
    Timeline,
    TimelineSchema,
    TimelineId,
    TimelineName,
    TimelineDesc,
    "swift",
    "Timeline",
  ),
];

//TCB templates array
export const tcbTemplates: TemplateWithData[] = [
  createTemplateEntry(
    SlideLayout1,
    SlideLayout1Schema,
    SlideLayout1Id,
    SlideLayout1Name,
    SlideLayout1Desc,
    "tcb",
    "IntroSlideLayout",
  ),
  createTemplateEntry(
    SlideLayout2,
    SlideLayout2Schema,
    SlideLayout2Id,
    SlideLayout2Name,
    SlideLayout2Desc,
    "tcb",
    "LearningObjectivesSlideLayout",
  ),
  createTemplateEntry(
    SlideLayout3,
    SlideLayout3Schema,
    SlideLayout3Id,
    SlideLayout3Name,
    SlideLayout3Desc,
    "tcb",
    "VocabularySlideLayout",
  ),
  createTemplateEntry(
    SlideLayout4,
    SlideLayout4Schema,
    SlideLayout4Id,
    SlideLayout4Name,
    SlideLayout4Desc,
    "tcb",
    "ConceptDevelopmentBulletPointSlideLayout",
  ),
  createTemplateEntry(
    SlideLayout5,
    SlideLayout5Schema,
    SlideLayout5Id,
    SlideLayout5Name,
    SlideLayout5Desc,
    "tcb",
    "ConceptDevelopmentDescriptionSlideLayout",
  ),
  createTemplateEntry(
    SlideLayout6,
    SlideLayout6Schema,
    SlideLayout6Id,
    SlideLayout6Name,
    SlideLayout6Desc,
    "tcb",
    "IndependentLearningSlideLayout",
  ),
  createTemplateEntry(
    SlideLayout7,
    SlideLayout7Schema,
    SlideLayout7Id,
    SlideLayout7Name,
    SlideLayout7Desc,
    "tcb",
    "QuestionSlideLayout",
  ),
  createTemplateEntry(
    SlideLayout8,
    SlideLayout8Schema,
    SlideLayout8Id,
    SlideLayout8Name,
    SlideLayout8Desc,
    "tcb",
    "QuestionAnsweredSlideLayout",
  ),
];

// TODO: Step 4: Combine all templates into a single array For UseCases (like the ones below)
// All templates combined
export const allLayouts: TemplateWithData[] = [
  ...neoGeneralTemplates,
  ...neoModernTemplates,
  ...neoStandardTemplates,
  ...neoSwiftTemplates,
  ...generalTemplates,
  ...modernTemplates,
  ...standardTemplates,
  ...swiftTemplates,
  ...tcbTemplates,
];

// TODO: Step 5: Combine all templates into a single array For UseCases (like the ones below)
// For UseCases we need to combine all templates into a single array with settings
export const templates: TemplateLayoutsWithSettings[] = [
  {
    id: "neo-general",
    name: "Neo General",
    description: neoGeneralSettings.description,
    settings: neoGeneralSettings as TemplateGroupSettings,
    layouts: neoGeneralTemplates,
  },
  {
    id: "neo-standard",
    name: "Neo Standard",
    description: neoStandardSettings.description,
    settings: neoStandardSettings as TemplateGroupSettings,
    layouts: neoStandardTemplates,
  },
  {
    id: "neo-modern",
    name: "Neo Modern",
    description: neoModernSettings.description,
    settings: neoModernSettings as TemplateGroupSettings,
    layouts: neoModernTemplates,
  },
  {
    id: "neo-swift",
    name: "Neo Swift",
    description: neoSwiftSettings.description,
    settings: neoSwiftSettings as TemplateGroupSettings,
    layouts: neoSwiftTemplates,
  },
  {
    id: "general",
    name: "General",
    description: generalSettings.description,
    settings: generalSettings as TemplateGroupSettings,
    layouts: generalTemplates,
  },
  {
    id: "modern",
    name: "Modern",
    description: modernSettings.description,
    settings: modernSettings as TemplateGroupSettings,
    layouts: modernTemplates,
  },
  {
    id: "standard",
    name: "Standard",
    description: standardSettings.description,
    settings: standardSettings as TemplateGroupSettings,
    layouts: standardTemplates,
  },
  {
    id: "swift",
    name: "Swift",
    description: swiftSettings.description,
    settings: swiftSettings as TemplateGroupSettings,
    layouts: swiftTemplates,
  },
  {
    id: "tcb",
    name: "TCB",
    description: tcbSettings.description,
    settings: tcbSettings as TemplateGroupSettings,
    layouts: tcbTemplates,
  },
];

// Helper to get templates by group ID
export function getTemplatesByTemplateName(
  templateId: string,
): TemplateWithData[] {
  const template = templates.find((t) => t.id === templateId);
  return template?.layouts || [];
}

export function getSchemaByTemplateId(templateId: string): any {
  const template = templates.find((t) => t.id === templateId);
  return (
    template?.layouts.map((t) => {
      return {
        id: t.layoutId,
        name: t.layoutName,
        description: t.layoutDescription,
        json_schema: t.schemaJSON,
      };
    }) || {}
  );
}
export function getSettingsByTemplateId(
  templateId: string,
): TemplateGroupSettings | undefined {
  const template = templates.find((t) => t.id === templateId);
  return template?.settings || undefined;
}
// Helper to get template by layout ID
export function getTemplateByLayoutId(
  layoutId: string,
): TemplateWithData | undefined {
  return allLayouts.find((t) => t.layoutId === layoutId);
}
export function getLayoutByLayoutId(
  layout: string,
): TemplateWithData | undefined {
  const templateName = layout.split(":")[0];

  const template = templates.find((t) => t.id === templateName);
  if (template) {
    return template.layouts.find((t) => t.layoutId === layout);
  }
  return undefined;
}
