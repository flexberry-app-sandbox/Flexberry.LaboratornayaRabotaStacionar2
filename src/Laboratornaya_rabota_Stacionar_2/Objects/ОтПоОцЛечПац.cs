﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Laboratornaya_rabota_Stacionar_2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// От по оц леч пац.
    /// </summary>
    // *** Start programmer edit section *** (ОтПоОцЛечПац CustomAttributes)

    // *** End programmer edit section *** (ОтПоОцЛечПац CustomAttributes)
    [AutoAltered()]
    [Caption("От по оц леч пац")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОтПоОцЛечПацE", new string[] {
            "ДатаСозд as \'Дата создания\'",
            "СпрСотр as \'Фио сотрудника\'",
            "СпрСотр.Фио as \'Фио сотрудника\'",
            "Пациент as \'Фио пациента\'",
            "Пациент.Фио as \'Фио пациента\'"})]
    [AssociatedDetailViewAttribute("ОтПоОцЛечПацE", "ТчОтчЛечПац", "ТчОтчЛечПацE", true, "", "Табличная часть отчет по оценке лечения пациента", true, new string[] {
            ""})]
    [View("ОтПоОцЛечПацL", new string[] {
            "ДатаСозд as \'Дата создания\'",
            "СпрСотр.Фио as \'Фио сотрудника\'",
            "Пациент.Фио as \'Фио пациента\'"})]
    public class ОтПоОцЛечПац : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДатаСозд;
        
        private IIS.Laboratornaya_rabota_Stacionar_2.Пациент fПациент;
        
        private IIS.Laboratornaya_rabota_Stacionar_2.СпрСотр fСпрСотр;
        
        private IIS.Laboratornaya_rabota_Stacionar_2.DetailArrayOfТчОтчЛечПац fТчОтчЛечПац;
        
        // *** Start programmer edit section *** (ОтПоОцЛечПац CustomMembers)

        // *** End programmer edit section *** (ОтПоОцЛечПац CustomMembers)

        
        /// <summary>
        /// ДатаСозд.
        /// </summary>
        // *** Start programmer edit section *** (ОтПоОцЛечПац.ДатаСозд CustomAttributes)

        // *** End programmer edit section *** (ОтПоОцЛечПац.ДатаСозд CustomAttributes)
        public virtual System.DateTime ДатаСозд
        {
            get
            {
                // *** Start programmer edit section *** (ОтПоОцЛечПац.ДатаСозд Get start)

                // *** End programmer edit section *** (ОтПоОцЛечПац.ДатаСозд Get start)
                System.DateTime result = this.fДатаСозд;
                // *** Start programmer edit section *** (ОтПоОцЛечПац.ДатаСозд Get end)

                // *** End programmer edit section *** (ОтПоОцЛечПац.ДатаСозд Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтПоОцЛечПац.ДатаСозд Set start)

                // *** End programmer edit section *** (ОтПоОцЛечПац.ДатаСозд Set start)
                this.fДатаСозд = value;
                // *** Start programmer edit section *** (ОтПоОцЛечПац.ДатаСозд Set end)

                // *** End programmer edit section *** (ОтПоОцЛечПац.ДатаСозд Set end)
            }
        }
        
        /// <summary>
        /// От по оц леч пац.
        /// </summary>
        // *** Start programmer edit section *** (ОтПоОцЛечПац.Пациент CustomAttributes)

        // *** End programmer edit section *** (ОтПоОцЛечПац.Пациент CustomAttributes)
        [PropertyStorage(new string[] {
                "Пациент"})]
        [NotNull()]
        public virtual IIS.Laboratornaya_rabota_Stacionar_2.Пациент Пациент
        {
            get
            {
                // *** Start programmer edit section *** (ОтПоОцЛечПац.Пациент Get start)

                // *** End programmer edit section *** (ОтПоОцЛечПац.Пациент Get start)
                IIS.Laboratornaya_rabota_Stacionar_2.Пациент result = this.fПациент;
                // *** Start programmer edit section *** (ОтПоОцЛечПац.Пациент Get end)

                // *** End programmer edit section *** (ОтПоОцЛечПац.Пациент Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтПоОцЛечПац.Пациент Set start)

                // *** End programmer edit section *** (ОтПоОцЛечПац.Пациент Set start)
                this.fПациент = value;
                // *** Start programmer edit section *** (ОтПоОцЛечПац.Пациент Set end)

                // *** End programmer edit section *** (ОтПоОцЛечПац.Пациент Set end)
            }
        }
        
        /// <summary>
        /// От по оц леч пац.
        /// </summary>
        // *** Start programmer edit section *** (ОтПоОцЛечПац.СпрСотр CustomAttributes)

        // *** End programmer edit section *** (ОтПоОцЛечПац.СпрСотр CustomAttributes)
        [PropertyStorage(new string[] {
                "СпрСотр"})]
        [NotNull()]
        public virtual IIS.Laboratornaya_rabota_Stacionar_2.СпрСотр СпрСотр
        {
            get
            {
                // *** Start programmer edit section *** (ОтПоОцЛечПац.СпрСотр Get start)

                // *** End programmer edit section *** (ОтПоОцЛечПац.СпрСотр Get start)
                IIS.Laboratornaya_rabota_Stacionar_2.СпрСотр result = this.fСпрСотр;
                // *** Start programmer edit section *** (ОтПоОцЛечПац.СпрСотр Get end)

                // *** End programmer edit section *** (ОтПоОцЛечПац.СпрСотр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтПоОцЛечПац.СпрСотр Set start)

                // *** End programmer edit section *** (ОтПоОцЛечПац.СпрСотр Set start)
                this.fСпрСотр = value;
                // *** Start programmer edit section *** (ОтПоОцЛечПац.СпрСотр Set end)

                // *** End programmer edit section *** (ОтПоОцЛечПац.СпрСотр Set end)
            }
        }
        
        /// <summary>
        /// От по оц леч пац.
        /// </summary>
        // *** Start programmer edit section *** (ОтПоОцЛечПац.ТчОтчЛечПац CustomAttributes)

        // *** End programmer edit section *** (ОтПоОцЛечПац.ТчОтчЛечПац CustomAttributes)
        public virtual IIS.Laboratornaya_rabota_Stacionar_2.DetailArrayOfТчОтчЛечПац ТчОтчЛечПац
        {
            get
            {
                // *** Start programmer edit section *** (ОтПоОцЛечПац.ТчОтчЛечПац Get start)

                // *** End programmer edit section *** (ОтПоОцЛечПац.ТчОтчЛечПац Get start)
                if ((this.fТчОтчЛечПац == null))
                {
                    this.fТчОтчЛечПац = new IIS.Laboratornaya_rabota_Stacionar_2.DetailArrayOfТчОтчЛечПац(this);
                }
                IIS.Laboratornaya_rabota_Stacionar_2.DetailArrayOfТчОтчЛечПац result = this.fТчОтчЛечПац;
                // *** Start programmer edit section *** (ОтПоОцЛечПац.ТчОтчЛечПац Get end)

                // *** End programmer edit section *** (ОтПоОцЛечПац.ТчОтчЛечПац Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтПоОцЛечПац.ТчОтчЛечПац Set start)

                // *** End programmer edit section *** (ОтПоОцЛечПац.ТчОтчЛечПац Set start)
                this.fТчОтчЛечПац = value;
                // *** Start programmer edit section *** (ОтПоОцЛечПац.ТчОтчЛечПац Set end)

                // *** End programmer edit section *** (ОтПоОцЛечПац.ТчОтчЛечПац Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОтПоОцЛечПацE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтПоОцЛечПацE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтПоОцЛечПацE", typeof(IIS.Laboratornaya_rabota_Stacionar_2.ОтПоОцЛечПац));
                }
            }
            
            /// <summary>
            /// "ОтПоОцЛечПацL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтПоОцЛечПацL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтПоОцЛечПацL", typeof(IIS.Laboratornaya_rabota_Stacionar_2.ОтПоОцЛечПац));
                }
            }
        }
    }
}
