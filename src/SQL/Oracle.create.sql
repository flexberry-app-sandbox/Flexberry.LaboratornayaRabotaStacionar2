



CREATE TABLE "СпрСотр"
(

	"primaryKey" RAW(16) NOT NULL,

	"Фио" NVARCHAR2(255) NULL,

	"Должность" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТчИтОтчПоБол"
(

	"primaryKey" RAW(16) NOT NULL,

	"ЛечПоФакт" NVARCHAR2(255) NULL,

	"ЛеПоПлан" NVARCHAR2(255) NULL,

	"Показатель" NVARCHAR2(255) NULL,

	"ИтОтчПоБол" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Пациент"
(

	"primaryKey" RAW(16) NOT NULL,

	"Фио" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОтПоОцЛечПац"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаСозд" DATE NULL,

	"Пациент" RAW(16) NOT NULL,

	"СпрСотр" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧИтОтчПоЛет"
(

	"primaryKey" RAW(16) NOT NULL,

	"ПричЛет" NVARCHAR2(255) NULL,

	"Число" NVARCHAR2(255) NULL,

	"ИтОтчПоЛет" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должность"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Диагноз"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ИтОтчПоБол"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"ПериодОт" DATE NULL,

	"ПериодДо" DATE NULL,

	"СпрСотр" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТчОтчЛечПац"
(

	"primaryKey" RAW(16) NOT NULL,

	"ОцЛеч" NVARCHAR2(255) NULL,

	"Рецептура" NVARCHAR2(255) NULL,

	"Диагноз" RAW(16) NOT NULL,

	"ОтПоОцЛечПац" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ИтОтчПоЛет"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"ПериодОт" DATE NULL,

	"ПериодДо" DATE NULL,

	"Место" NVARCHAR2(255) NULL,

	"СпрСотр" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "СпрСотр"
	ADD CONSTRAINT "СпрСотр_FДолж_1198" FOREIGN KEY ("Должность") REFERENCES "Должность" ("primaryKey");

CREATE INDEX "СпрСотр_IДолж_3774" on "СпрСотр" ("Должность");

ALTER TABLE "ТчИтОтчПоБол"
	ADD CONSTRAINT "ТчИтОтчПоБол__1155" FOREIGN KEY ("ИтОтчПоБол") REFERENCES "ИтОтчПоБол" ("primaryKey");

CREATE INDEX "ТчИтОтчПоБол__3706" on "ТчИтОтчПоБол" ("ИтОтчПоБол");

ALTER TABLE "ОтПоОцЛечПац"
	ADD CONSTRAINT "ОтПоОцЛечПац__2942" FOREIGN KEY ("Пациент") REFERENCES "Пациент" ("primaryKey");

CREATE INDEX "ОтПоОцЛечПац_I_252" on "ОтПоОцЛечПац" ("Пациент");

ALTER TABLE "ОтПоОцЛечПац"
	ADD CONSTRAINT "ОтПоОцЛечПац__2827" FOREIGN KEY ("СпрСотр") REFERENCES "СпрСотр" ("primaryKey");

CREATE INDEX "ОтПоОцЛечПац__3179" on "ОтПоОцЛечПац" ("СпрСотр");

ALTER TABLE "ТЧИтОтчПоЛет"
	ADD CONSTRAINT "ТЧИтОтчПоЛет__7331" FOREIGN KEY ("ИтОтчПоЛет") REFERENCES "ИтОтчПоЛет" ("primaryKey");

CREATE INDEX "ТЧИтОтчПоЛет__9758" on "ТЧИтОтчПоЛет" ("ИтОтчПоЛет");

ALTER TABLE "ИтОтчПоБол"
	ADD CONSTRAINT "ИтОтчПоБол_FС_4138" FOREIGN KEY ("СпрСотр") REFERENCES "СпрСотр" ("primaryKey");

CREATE INDEX "ИтОтчПоБол_IС_3835" on "ИтОтчПоБол" ("СпрСотр");

ALTER TABLE "ТчОтчЛечПац"
	ADD CONSTRAINT "ТчОтчЛечПац_F_3903" FOREIGN KEY ("Диагноз") REFERENCES "Диагноз" ("primaryKey");

CREATE INDEX "ТчОтчЛечПац_I_8511" on "ТчОтчЛечПац" ("Диагноз");

ALTER TABLE "ТчОтчЛечПац"
	ADD CONSTRAINT "ТчОтчЛечПац_F_5077" FOREIGN KEY ("ОтПоОцЛечПац") REFERENCES "ОтПоОцЛечПац" ("primaryKey");

CREATE INDEX "ТчОтчЛечПац_I_9599" on "ТчОтчЛечПац" ("ОтПоОцЛечПац");

ALTER TABLE "ИтОтчПоЛет"
	ADD CONSTRAINT "ИтОтчПоЛет_FС_7133" FOREIGN KEY ("СпрСотр") REFERENCES "СпрСотр" ("primaryKey");

CREATE INDEX "ИтОтчПоЛет_IС_8967" on "ИтОтчПоЛет" ("СпрСотр");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


