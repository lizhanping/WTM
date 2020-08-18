using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using WalkingTec.Mvvm.Core;
using WalkingTec.Mvvm.Core.Extensions;
using WalkingTec.Mvvm.BlazorDemo.Models;


namespace WalkingTec.Mvvm.BlazorDemo.ViewModels.CityVMs
{
    public partial class CitySearcher : BaseSearcher
    {
        public List<ComboSelectListItem> AllParents { get; set; }
        [Display(Name = "父级")]
        public Guid? ParentId { get; set; }

        protected override void InitVM()
        {
            AllParents = DC.Set<City>().GetSelectListItems(WtmContext, null, y => y.Name);
        }

    }
}