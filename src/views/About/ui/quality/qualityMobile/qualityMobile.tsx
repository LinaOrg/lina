import React, { useState } from "react";
import { Divider, Title } from "@/shared/ui";
import styles from "./qualityMobile.module.scss";

interface Item {
  title: string;
  body: string;
  keywords: string[];
  titleKeywords: string[];
}

const items: Item[] = [
  {
    title: "کیفیت را هیچ‌گاه فراموش  نخواهیم کرد",
    body: "روزهای طلایی ما همچنان ادامه داشت. لینا اقدام به خرید بهترین ماشین‌آلات و تجهیزات تمام اتوماتیک از برندهاي مطرح دنیا نظیر امریکن اکسترودر، بولر سوییس، ولف آلمان، فلوریگوي هلند، ایشیکاي ژاپن و ممت ترکیه نمود تا تضمین دیگري باشد براي تولید محصول با بهترین کیفیت. این‌گونه لینا یک گام بزرگ دیگر در راستاي چشم‌انداز خود برداشت. از طرف دیگر، خلاقیت‌های لینا هیچ‌گاه خاموش نشد. در کلیه محصولات لینا و با به‌کارگیري فرمولاسیون جدید، از روغن فاقد اسیدهاي چرب ترانس و داراي اسیدهاي چرب مهم و ضروري امگا (،3 ،6 9) به مقدار فراوان و بدون مواد نگهدارنده استفاده می‌شود.",
    keywords: [
      "بهترین ماشین‌آلات",
      "تجهیزات تمام اتوماتیک",
      "تضمین",
      "تولید محصول با بهترین کیفیت.",
      "روغن فاقد اسیدهاي چرب ترانس",
      " داراي اسیدهاي چرب مهم",
      "و ضروري امگا",
      "بدون مواد نگهدارنده",
    ],
    titleKeywords: ["کیفیت", "فراموش"],
  },
  {
    title: "پیشرفت‌ها را مدیون شکست‌ها هستیم",
    body: "اولین خلاقیت‌ها مصادف شد با اولین شکست‌ها. پس از تلاش بسیار، گروه تحقیقاتی لینا موفق شد از رنگ طبیعی بتاکاروتن که از هویج استخراج می‌شد، در فرآیند تولید استفاده کند و اولین اسنک لینا با رنگ طبیعی با نام « لینا لوبیایی» را به تولید انبوه برساند. با توجه به رنگ زرد این محصول، بازخوردهایی مبنی بر نارضایتی مشتریان دریافت شد. مدیرعامل لینا که هدفی جز تامین رضایت مشتري نداشت، دستور مرجوعی محصولات توزیع شده در سراسر کشور را که کار بسیار سخت و پر هزینه‌اي بود را صادر کرد. اما لینا ناامید نشد...",
    keywords: [
      "طبیعی بتاکاروتن",
      "اولین اسنک لینا",
      "لینا لوبیایی",
      "اما لینا ناامید نشد...",
    ],
    titleKeywords: [" شکست‌ها", "پیشرفت‌ها"],
  },
  {
    title: "با خلاقیت‌ها، به جهانیان معرفی شدیم",
    body: "گروه تحقیقاتی لینا، نوعی فلفل قرمز شیرین را براي تولید در اسنک‌های خود در نظر گرفت. رنگ طبیعی استفاده شده در محصولات لینا که از «پاپریکا» ساخته شده بود، سرشار از رنگدانه‌هاي طبیعی کاروتنوئید و آنتی اکسیدان بود که نقش موثري در سلامتی دارند. سرانجام اولین اسنک در ایران با رنگ طبیعی پاپریکا و با نام «لینا توپی» توسط لینا تولید شد. به واسطه تولید محصولاتی باکیفیت و استفاده از رنگ طبیعی، لینا در ردیف صادرکنندگان برتر قرار گرفت. با عبور از استانداردهاي تعیین شده براي ورود به بازارهاي جهانی، صادرات به کشورهاي همسایه، حوزه خلیج فارس و اروپا را از آغاز شد.",
    keywords: [
      "بازارهاي جهانی، صادرات به کشورهاي همسایه، حوزه خلیج فارس و اروپا را از آغاز شد.",
      "پاپریکا و با نام «لینا توپی»",
      "اولین",
      "سرشار از رنگدانه‌هاي طبیعی کاروتنوئید و آنتی اکسیدان",
    ],
    titleKeywords: ["جهانیان معرفی", "با خلاقیت‌ها"],
  },
  {
    title: "رویاهای‌مان بزرگ می‌شوند",
    body: "عرضه اسنک‌های باکیفیت و رضایت مصرف‌کنندگان، روزهای خوبی برای‌ ما رقم زده بود. وقت آن رسیده بود که با جدیت بیشتری در تولید محصولات سالم قدم برداریم. موفقیت‌ها ادامه داشت تا این‌که زمینی در شهرك صنعتی شکوهیه به مساحت 16,000 متر مربع خریداري شد و با استقلال بیشتري، خط فکري خود را دنبال کردیم. و آنجا بود که برند لینا خلق شد.",
    keywords: ["باکیفیت و رضایت مصرف‌کنندگان", "برند لینا خلق شد"],
    titleKeywords: ["رویاهای‌مان بزرگ"],
  },
  {
    title: "و سرانجام، تحقق آرزوها",
    body: "گروه صنعتی لینا هر روز مصمم‌تر از قبل، دایره فعالیت خود را با هدف بهبود در کیفیت و تولید محصولات سالم و طبیعی گسترش خواهد داد تا با تولید محصولاتی با کیفیت بالاتر از رقباي خارجی و قابل رقابت در بازار جهانی، برندي ایرانی در کلاس جهانی را به دنیا معرفی نماید که لایق نام ایران و موجب افتخار هر ایرانی باشد.",
    keywords: ["مصمم‌تر از قبل", "افتخار هر ایرانی"],
    titleKeywords: [""],
  },
  {
    title: "در جستجوی آرزوهای بزرگ",
    body: "محصولی باکیفیت و خلق برندي شناخته‌شده در سطح جهانی، دغدغه روزهای جوانی بنیانگذار لینا بود. اگر خاطراتی خوبی از اسنک «مریخی» داشته باشید، بد نیست بدانید که اولین تولید انبوه‌مان با این برند انجام شد. زمانی که با تولید اسنکی جدید و ارائه طعم به‌یادماندنی، یکی از پرفروش‌ترین اسنک‌ها را به بازار عرضه کردیم. استفاده از رنگ‌های مصنوعی در اسنک‌های آن زمان و خطرات این مواد افزودنی، تیم تحقیقاتی‌مان را به فکر واداشت تا اولین اسنک با رنگ طبیعی را در کشور تولید کنند.",
    keywords: [
      "باکیفیت و خلق برندي شناخته‌شده",
      "پرفروش‌ترین اسنک‌ها",
      "اولین اسنک با رنگ طبیعی",
    ],
    titleKeywords: [""],
  },
];

export const QualityMobile: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<Item>(items[0]);

  const itemsToShow = items.slice(currentIndex, currentIndex + 2);

  const nextItems = () => {
    if (currentIndex + 2 < items.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevItems = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
  };

  const highlightKeywords = (text: string, keywords: string[]): string => {
    let modifiedText = text;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      modifiedText = modifiedText.replace(regex, `<span class="${styles.localSpan}">$1</span>`);
    });
    return modifiedText;
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <Title>
            <span className={styles.innerTitle} dangerouslySetInnerHTML={{ __html: highlightKeywords(selectedItem.title, selectedItem.titleKeywords) }}></span>
          </Title>
          <div className={styles.pic}><img src="/images/leaf.png" alt="" /></div>
        </div>
        <div className={styles.content}>
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{
              __html: highlightKeywords(selectedItem.body, selectedItem.keywords),
            }}
          />
        </div>

        <div className={styles.textChart}>
          {itemsToShow.map((item, index) => (
            <div key={index} className={styles.item} onClick={() => handleItemClick(item)}>
              <div className={styles.itemTitle} dangerouslySetInnerHTML={{ __html: highlightKeywords(item.title, item.titleKeywords) }}></div>
              <div className={styles.itemBody} dangerouslySetInnerHTML={{ __html: highlightKeywords(item.body, item.keywords) }} ></div>
            </div>
          ))}
        </div>

        <div className={styles.arrows}>
          <div className={styles.arrowsPart}>
            <div className={styles.toTheLeft} onClick={prevItems}>→</div>
            <Divider width="" height="2px" className={styles.customDivider} />
            <div className={styles.toTheLeft} onClick={nextItems}>←</div>
          </div>
        </div>
      </div>
    </>
  );
};
