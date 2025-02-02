﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEngine;

namespace GDamage
{
    public class GDamage : RustBuster2016.API.RustBusterPlugin {
        public GameObject Load;

        public override string Name {
            get { return "GDamage"; }
        }

        public override string Author {
            get { return "Gintaras"; }
        }

        public override Version Version {
            get { return new Version("1.0"); }
        }


        public override void DeInitialize() {
            if (Load != null) UnityEngine.Object.Destroy(Load);
        }

        public override void Initialize() {
            Load = new GameObject();
            Load.AddComponent<GDamage_GUI>();
            UnityEngine.Object.DontDestroyOnLoad(Load);
        }
    }
}
