TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "thumbnailUrl": "media/panorama_35E8C518_39E2_4029_4194_054D3498BD1A_t.jpg",
  "hfovMax": 130,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "thumbnailUrl": "media/panorama_32860A97_39E3_C027_41BA_385D71D883FE_t.jpg",
     "hfovMax": 130,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_35E8C518_39E2_4029_4194_054D3498BD1A"
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "thumbnailUrl": "media/panorama_327682E0_39E3_C019_41B8_9D43DFC408DA_t.jpg",
        "hfovMax": 130,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "thumbnailUrl": "media/panorama_325C2B29_39E2_406B_4199_1C6BE6363C73_t.jpg",
           "hfovMax": 130,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_327682E0_39E3_C019_41B8_9D43DFC408DA"
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "thumbnailUrl": "media/panorama_32DB6313_39E2_403F_41C2_EB4E92E5CFDD_t.jpg",
              "hfovMax": 130,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_325C2B29_39E2_406B_4199_1C6BE6363C73"
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "thumbnailUrl": "media/panorama_32241B57_39E2_4026_4183_26C6E4717B44_t.jpg",
                 "hfovMax": 130,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_35E8C518_39E2_4029_4194_054D3498BD1A"
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_32DB6313_39E2_403F_41C2_EB4E92E5CFDD"
                  }
                 ],
                 "id": "panorama_32241B57_39E2_4026_4183_26C6E4717B44",
                 "hfovMin": 60,
                 "vfov": 180,
                 "pitch": 0,
                 "label": "02",
                 "class": "Panorama",
                 "hfov": 360,
                 "partial": false,
                 "frames": [
                  {
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_32241B57_39E2_4026_4183_26C6E4717B44_hq.jpeg",
                      "width": 4320,
                      "class": "ImageResourceLevel",
                      "height": 2160
                     },
                     {
                      "url": "media/panorama_32241B57_39E2_4026_4183_26C6E4717B44.jpeg",
                      "width": 4002,
                      "class": "ImageResourceLevel",
                      "height": 2001
                     }
                    ]
                   },
                   "thumbnailUrl": "media/panorama_32241B57_39E2_4026_4183_26C6E4717B44_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Image"
                     },
                     "items": [
                      {
                       "pitch": -23.39,
                       "image": {
                        "colCount": 5,
                        "frameDuration": 41,
                        "class": "AnimatedImageResource",
                        "frameCount": 32,
                        "levels": [
                         {
                          "url": "media/panorama_32241B57_39E2_4026_4183_26C6E4717B44_0_HS_0_0.png",
                          "width": 600,
                          "class": "ImageResourceLevel",
                          "height": 385
                         }
                        ],
                        "rowCount": 7
                       },
                       "hfov": 33.47,
                       "yaw": 168.86,
                       "class": "HotspotPanoramaOverlayImage",
                       "distance": 100
                      }
                     ],
                     "rollOverDisplay": false,
                     "id": "overlay_287CA74F_39E6_C026_41C3_845E62BE9A44",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "click": "this.setCameraSameSpotAsMedia(this.camera_349DFDDD_3A0B_CBAF_4162_2568B9FB4D9E, this.panorama_32241B57_39E2_4026_4183_26C6E4717B44); this.startPanoramaWithCamera(this.panorama_32DB6313_39E2_403F_41C2_EB4E92E5CFDD, this.camera_349DFDDD_3A0B_CBAF_4162_2568B9FB4D9E); this.mainPlayList.set('selectedIndex', 2)",
                       "mapColor": "image",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": []
                    },
                    {
                     "angle": 0,
                     "distance": 100,
                     "class": "TripodCapPanoramaOverlay",
                     "hfov": 45,
                     "id": "panorama_32241B57_39E2_4026_4183_26C6E4717B44_tcap0",
                     "rotate": false,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "url": "media/panorama_35E8C518_39E2_4029_4194_054D3498BD1A_tcap0.png",
                        "width": 505,
                        "class": "ImageResourceLevel",
                        "height": 505
                       }
                      ]
                     },
                     "inertia": true
                    },
                    {
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Image"
                     },
                     "items": [
                      {
                       "pitch": -31.83,
                       "image": {
                        "colCount": 5,
                        "frameDuration": 41,
                        "class": "AnimatedImageResource",
                        "frameCount": 32,
                        "levels": [
                         {
                          "url": "media/panorama_32241B57_39E2_4026_4183_26C6E4717B44_0_HS_1_0.png",
                          "width": 600,
                          "class": "ImageResourceLevel",
                          "height": 385
                         }
                        ],
                        "rowCount": 7
                       },
                       "hfov": 30.98,
                       "yaw": -112.07,
                       "class": "HotspotPanoramaOverlayImage",
                       "distance": 100
                      }
                     ],
                     "rollOverDisplay": false,
                     "id": "overlay_349BB352_39F8_58BA_41C7_39BCC684A8B9",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "click": "this.setCameraSameSpotAsMedia(this.camera_34990DCB_3A0B_CBAA_41C5_7850CFB600D5, this.panorama_32241B57_39E2_4026_4183_26C6E4717B44); this.startPanoramaWithCamera(this.panorama_35E8C518_39E2_4029_4194_054D3498BD1A, this.camera_34990DCB_3A0B_CBAA_41C5_7850CFB600D5); this.mainPlayList.set('selectedIndex', 0)",
                       "mapColor": "image",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": []
                    }
                   ]
                  }
                 ]
                }
               }
              ],
              "id": "panorama_32DB6313_39E2_403F_41C2_EB4E92E5CFDD",
              "hfovMin": 60,
              "vfov": 180,
              "pitch": 0,
              "label": "03",
              "class": "Panorama",
              "hfov": 360,
              "partial": false,
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_32DB6313_39E2_403F_41C2_EB4E92E5CFDD_hq.jpeg",
                   "width": 4320,
                   "class": "ImageResourceLevel",
                   "height": 2160
                  },
                  {
                   "url": "media/panorama_32DB6313_39E2_403F_41C2_EB4E92E5CFDD.jpeg",
                   "width": 4002,
                   "class": "ImageResourceLevel",
                   "height": 2001
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_32DB6313_39E2_403F_41C2_EB4E92E5CFDD_t.jpg",
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Image"
                  },
                  "items": [
                   {
                    "pitch": -36.12,
                    "image": {
                     "colCount": 5,
                     "frameDuration": 41,
                     "class": "AnimatedImageResource",
                     "frameCount": 32,
                     "levels": [
                      {
                       "url": "media/panorama_32DB6313_39E2_403F_41C2_EB4E92E5CFDD_0_HS_0_0.png",
                       "width": 600,
                       "class": "ImageResourceLevel",
                       "height": 385
                      }
                     ],
                     "rowCount": 7
                    },
                    "hfov": 30.44,
                    "yaw": 179.67,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100
                   }
                  ],
                  "rollOverDisplay": false,
                  "id": "overlay_2941DD7D_39E7_C0EB_41C8_5DEEEC794BF2",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "click": "this.setCameraSameSpotAsMedia(this.camera_2BDEAD59_3A0B_C8B7_41C5_A7013DC1CF11, this.panorama_32DB6313_39E2_403F_41C2_EB4E92E5CFDD); this.startPanoramaWithCamera(this.panorama_325C2B29_39E2_406B_4199_1C6BE6363C73, this.camera_2BDEAD59_3A0B_C8B7_41C5_A7013DC1CF11); this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "image",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": []
                 },
                 {
                  "angle": 0,
                  "distance": 100,
                  "class": "TripodCapPanoramaOverlay",
                  "hfov": 45,
                  "id": "panorama_32DB6313_39E2_403F_41C2_EB4E92E5CFDD_tcap0",
                  "rotate": false,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "url": "media/panorama_35E8C518_39E2_4029_4194_054D3498BD1A_tcap0.png",
                     "width": 505,
                     "class": "ImageResourceLevel",
                     "height": 505
                    }
                   ]
                  },
                  "inertia": true
                 },
                 {
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Image"
                  },
                  "items": [
                   {
                    "pitch": -24.55,
                    "image": {
                     "colCount": 5,
                     "frameDuration": 41,
                     "class": "AnimatedImageResource",
                     "frameCount": 32,
                     "levels": [
                      {
                       "url": "media/panorama_32DB6313_39E2_403F_41C2_EB4E92E5CFDD_0_HS_1_0.png",
                       "width": 600,
                       "class": "ImageResourceLevel",
                       "height": 385
                      }
                     ],
                     "rowCount": 7
                    },
                    "hfov": 33.42,
                    "yaw": -5.22,
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100
                   }
                  ],
                  "rollOverDisplay": false,
                  "id": "overlay_3422934C_39F8_58AE_41C5_675E2B882F7F",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "click": "this.setCameraSameSpotAsMedia(this.camera_2BEBCD62_3A0B_C89A_41A3_6BAEFDD2B84A, this.panorama_32DB6313_39E2_403F_41C2_EB4E92E5CFDD); this.startPanoramaWithCamera(this.panorama_32241B57_39E2_4026_4183_26C6E4717B44, this.camera_2BEBCD62_3A0B_C89A_41A3_6BAEFDD2B84A); this.mainPlayList.set('selectedIndex', 1)",
                    "mapColor": "image",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": []
                 }
                ]
               }
              ]
             }
            }
           ],
           "id": "panorama_325C2B29_39E2_406B_4199_1C6BE6363C73",
           "hfovMin": 60,
           "vfov": 180,
           "pitch": 0,
           "label": "04",
           "class": "Panorama",
           "hfov": 360,
           "partial": false,
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_325C2B29_39E2_406B_4199_1C6BE6363C73_hq.jpeg",
                "width": 4320,
                "class": "ImageResourceLevel",
                "height": 2160
               },
               {
                "url": "media/panorama_325C2B29_39E2_406B_4199_1C6BE6363C73.jpeg",
                "width": 4002,
                "class": "ImageResourceLevel",
                "height": 2001
               }
              ]
             },
             "thumbnailUrl": "media/panorama_325C2B29_39E2_406B_4199_1C6BE6363C73_t.jpg",
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "items": [
                {
                 "pitch": -26.55,
                 "image": {
                  "colCount": 5,
                  "frameDuration": 41,
                  "class": "AnimatedImageResource",
                  "frameCount": 32,
                  "levels": [
                   {
                    "url": "media/panorama_325C2B29_39E2_406B_4199_1C6BE6363C73_0_HS_0_0.png",
                    "width": 600,
                    "class": "ImageResourceLevel",
                    "height": 385
                   }
                  ],
                  "rowCount": 7
                 },
                 "hfov": 32.62,
                 "yaw": -92.31,
                 "class": "HotspotPanoramaOverlayImage",
                 "distance": 100
                }
               ],
               "rollOverDisplay": false,
               "id": "overlay_29058C39_39E6_C06B_41B4_B3B1351D9728",
               "useHandCursor": true,
               "areas": [
                {
                 "click": "this.setCameraSameSpotAsMedia(this.camera_34C15E20_3A0B_C896_41C4_D02F2F19D34B, this.panorama_325C2B29_39E2_406B_4199_1C6BE6363C73); this.startPanoramaWithCamera(this.panorama_327682E0_39E3_C019_41B8_9D43DFC408DA, this.camera_34C15E20_3A0B_C896_41C4_D02F2F19D34B); this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": []
              },
              {
               "angle": 0,
               "distance": 100,
               "class": "TripodCapPanoramaOverlay",
               "hfov": 45,
               "id": "panorama_325C2B29_39E2_406B_4199_1C6BE6363C73_tcap0",
               "rotate": false,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "url": "media/panorama_35E8C518_39E2_4029_4194_054D3498BD1A_tcap0.png",
                  "width": 505,
                  "class": "ImageResourceLevel",
                  "height": 505
                 }
                ]
               },
               "inertia": true
              },
              {
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "items": [
                {
                 "pitch": -23.63,
                 "image": {
                  "colCount": 5,
                  "frameDuration": 41,
                  "class": "AnimatedImageResource",
                  "frameCount": 32,
                  "levels": [
                   {
                    "url": "media/panorama_325C2B29_39E2_406B_4199_1C6BE6363C73_0_HS_1_0.png",
                    "width": 600,
                    "class": "ImageResourceLevel",
                    "height": 385
                   }
                  ],
                  "rowCount": 7
                 },
                 "hfov": 29.38,
                 "yaw": 11.81,
                 "class": "HotspotPanoramaOverlayImage",
                 "distance": 100
                }
               ],
               "rollOverDisplay": false,
               "id": "overlay_36E1A803_39F8_489A_41B8_1372F0DA4B3B",
               "useHandCursor": true,
               "areas": [
                {
                 "click": "this.setCameraSameSpotAsMedia(this.camera_34CAFE2F_3A0B_C8EB_41BC_92BB8ED95947, this.panorama_325C2B29_39E2_406B_4199_1C6BE6363C73); this.startPanoramaWithCamera(this.panorama_32DB6313_39E2_403F_41C2_EB4E92E5CFDD, this.camera_34CAFE2F_3A0B_C8EB_41BC_92BB8ED95947); this.mainPlayList.set('selectedIndex', 2)",
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": []
              }
             ]
            }
           ]
          }
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_32860A97_39E3_C027_41BA_385D71D883FE"
         }
        ],
        "id": "panorama_327682E0_39E3_C019_41B8_9D43DFC408DA",
        "hfovMin": 60,
        "vfov": 180,
        "pitch": 0,
        "label": "05",
        "class": "Panorama",
        "hfov": 360,
        "partial": false,
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_327682E0_39E3_C019_41B8_9D43DFC408DA_hq.jpeg",
             "width": 4320,
             "class": "ImageResourceLevel",
             "height": 2160
            },
            {
             "url": "media/panorama_327682E0_39E3_C019_41B8_9D43DFC408DA.jpeg",
             "width": 4002,
             "class": "ImageResourceLevel",
             "height": 2001
            }
           ]
          },
          "thumbnailUrl": "media/panorama_327682E0_39E3_C019_41B8_9D43DFC408DA_t.jpg",
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "enabledInCardboard": true,
            "data": {
             "label": "Image"
            },
            "items": [
             {
              "pitch": -18.65,
              "image": {
               "colCount": 5,
               "frameDuration": 41,
               "class": "AnimatedImageResource",
               "frameCount": 32,
               "levels": [
                {
                 "url": "media/panorama_327682E0_39E3_C019_41B8_9D43DFC408DA_0_HS_0_0.png",
                 "width": 600,
                 "class": "ImageResourceLevel",
                 "height": 385
                }
               ],
               "rowCount": 7
              },
              "hfov": 33.77,
              "yaw": -2.87,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_285A8AA1_39E5_C01A_41C3_B5A120C5426F",
            "useHandCursor": true,
            "areas": [
             {
              "click": "this.setCameraSameSpotAsMedia(this.camera_34A98DF8_3A0B_CB76_41C9_BFA962776344, this.panorama_327682E0_39E3_C019_41B8_9D43DFC408DA); this.startPanoramaWithCamera(this.panorama_32860A97_39E3_C027_41BA_385D71D883FE, this.camera_34A98DF8_3A0B_CB76_41C9_BFA962776344); this.mainPlayList.set('selectedIndex', 5)",
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": []
           },
           {
            "angle": 0,
            "distance": 100,
            "class": "TripodCapPanoramaOverlay",
            "hfov": 45,
            "id": "panorama_327682E0_39E3_C019_41B8_9D43DFC408DA_tcap0",
            "rotate": false,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "url": "media/panorama_35E8C518_39E2_4029_4194_054D3498BD1A_tcap0.png",
               "width": 505,
               "class": "ImageResourceLevel",
               "height": 505
              }
             ]
            },
            "inertia": true
           },
           {
            "enabledInCardboard": true,
            "data": {
             "label": "Image"
            },
            "items": [
             {
              "pitch": -21.83,
              "image": {
               "colCount": 5,
               "frameDuration": 41,
               "class": "AnimatedImageResource",
               "frameCount": 32,
               "levels": [
                {
                 "url": "media/panorama_327682E0_39E3_C019_41B8_9D43DFC408DA_0_HS_1_0.png",
                 "width": 600,
                 "class": "ImageResourceLevel",
                 "height": 385
                }
               ],
               "rowCount": 7
              },
              "hfov": 35.89,
              "yaw": 111.06,
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "rollOverDisplay": false,
            "id": "overlay_36C6E724_39F8_389E_41CC_0658C0275F4F",
            "useHandCursor": true,
            "areas": [
             {
              "click": "this.setCameraSameSpotAsMedia(this.camera_34A06DE4_3A0B_CB9E_41BE_998897405FDB, this.panorama_327682E0_39E3_C019_41B8_9D43DFC408DA); this.startPanoramaWithCamera(this.panorama_325C2B29_39E2_406B_4199_1C6BE6363C73, this.camera_34A06DE4_3A0B_CB9E_41BE_998897405FDB); this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": []
           }
          ]
         }
        ]
       }
      }
     ],
     "id": "panorama_32860A97_39E3_C027_41BA_385D71D883FE",
     "hfovMin": 60,
     "vfov": 180,
     "pitch": 0,
     "label": "06",
     "class": "Panorama",
     "hfov": 360,
     "partial": false,
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_32860A97_39E3_C027_41BA_385D71D883FE_hq.jpeg",
          "width": 4320,
          "class": "ImageResourceLevel",
          "height": 2160
         },
         {
          "url": "media/panorama_32860A97_39E3_C027_41BA_385D71D883FE.jpeg",
          "width": 4002,
          "class": "ImageResourceLevel",
          "height": 2001
         }
        ]
       },
       "thumbnailUrl": "media/panorama_32860A97_39E3_C027_41BA_385D71D883FE_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "enabledInCardboard": true,
         "data": {
          "label": "Image"
         },
         "items": [
          {
           "pitch": -20.09,
           "image": {
            "colCount": 5,
            "frameDuration": 41,
            "class": "AnimatedImageResource",
            "frameCount": 32,
            "levels": [
             {
              "url": "media/panorama_32860A97_39E3_C027_41BA_385D71D883FE_0_HS_0_0.png",
              "width": 600,
              "class": "ImageResourceLevel",
              "height": 385
             }
            ],
            "rowCount": 7
           },
           "hfov": 32.44,
           "yaw": 1.79,
           "class": "HotspotPanoramaOverlayImage",
           "distance": 100
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_36C3282F_39E2_C066_41C3_98DE90B1FB4B",
         "useHandCursor": true,
         "areas": [
          {
           "click": "this.setCameraSameSpotAsMedia(this.camera_2BF50D76_3A0B_CB7A_4187_E1B3926C211D, this.panorama_32860A97_39E3_C027_41BA_385D71D883FE); this.startPanoramaWithCamera(this.panorama_35E8C518_39E2_4029_4194_054D3498BD1A, this.camera_2BF50D76_3A0B_CB7A_4187_E1B3926C211D); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "image",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": []
        },
        {
         "angle": 0,
         "distance": 100,
         "class": "TripodCapPanoramaOverlay",
         "hfov": 45,
         "id": "panorama_32860A97_39E3_C027_41BA_385D71D883FE_tcap0",
         "rotate": false,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "url": "media/panorama_35E8C518_39E2_4029_4194_054D3498BD1A_tcap0.png",
            "width": 505,
            "class": "ImageResourceLevel",
            "height": 505
           }
          ]
         },
         "inertia": false
        },
        {
         "enabledInCardboard": true,
         "data": {
          "label": "Image"
         },
         "items": [
          {
           "pitch": -30.07,
           "image": {
            "colCount": 5,
            "frameDuration": 41,
            "class": "AnimatedImageResource",
            "frameCount": 32,
            "levels": [
             {
              "url": "media/panorama_32860A97_39E3_C027_41BA_385D71D883FE_0_HS_1_0.png",
              "width": 600,
              "class": "ImageResourceLevel",
              "height": 385
             }
            ],
            "rowCount": 7
           },
           "hfov": 42.59,
           "yaw": 179.76,
           "class": "HotspotPanoramaOverlayImage",
           "distance": 100
          }
         ],
         "rollOverDisplay": false,
         "id": "overlay_3698564D_39F8_78AE_41C4_B394999B9876",
         "useHandCursor": true,
         "areas": [
          {
           "click": "this.setCameraSameSpotAsMedia(this.camera_28005D80_3A0B_CB96_4195_3FFD421BF68C, this.panorama_32860A97_39E3_C027_41BA_385D71D883FE); this.startPanoramaWithCamera(this.panorama_327682E0_39E3_C019_41B8_9D43DFC408DA, this.camera_28005D80_3A0B_CB96_4195_3FFD421BF68C); this.mainPlayList.set('selectedIndex', 4)",
           "mapColor": "image",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": []
        }
       ]
      }
     ]
    }
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_32241B57_39E2_4026_4183_26C6E4717B44"
   }
  ],
  "id": "panorama_35E8C518_39E2_4029_4194_054D3498BD1A",
  "hfovMin": 60,
  "vfov": 180,
  "pitch": 0,
  "label": "01",
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_35E8C518_39E2_4029_4194_054D3498BD1A_hq.jpeg",
       "width": 4320,
       "class": "ImageResourceLevel",
       "height": 2160
      },
      {
       "url": "media/panorama_35E8C518_39E2_4029_4194_054D3498BD1A.jpeg",
       "width": 4002,
       "class": "ImageResourceLevel",
       "height": 2001
      }
     ]
    },
    "thumbnailUrl": "media/panorama_35E8C518_39E2_4029_4194_054D3498BD1A_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": -21.53,
        "image": {
         "colCount": 5,
         "frameDuration": 41,
         "class": "AnimatedImageResource",
         "frameCount": 32,
         "levels": [
          {
           "url": "media/panorama_35E8C518_39E2_4029_4194_054D3498BD1A_0_HS_0_0.png",
           "width": 600,
           "class": "ImageResourceLevel",
           "height": 385
          }
         ],
         "rowCount": 7
        },
        "hfov": 28.05,
        "yaw": 69.26,
        "class": "HotspotPanoramaOverlayImage",
        "distance": 100
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_2978C967_39E2_40E6_4193_859C4ED2AD56",
      "useHandCursor": true,
      "areas": [
       {
        "click": "this.setCameraSameSpotAsMedia(this.camera_34B6AE11_3A0B_C8B6_41CA_B3403B099640, this.panorama_35E8C518_39E2_4029_4194_054D3498BD1A); this.startPanoramaWithCamera(this.panorama_32241B57_39E2_4026_4183_26C6E4717B44, this.camera_34B6AE11_3A0B_C8B6_41CA_B3403B099640); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": []
     },
     {
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": -23.87,
        "image": {
         "colCount": 5,
         "frameDuration": 41,
         "class": "AnimatedImageResource",
         "frameCount": 32,
         "levels": [
          {
           "url": "media/panorama_35E8C518_39E2_4029_4194_054D3498BD1A_0_HS_1_0.png",
           "width": 600,
           "class": "ImageResourceLevel",
           "height": 385
          }
         ],
         "rowCount": 7
        },
        "hfov": 29.33,
        "yaw": -179.54,
        "class": "HotspotPanoramaOverlayImage",
        "distance": 100
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_3685DE9F_39E2_4027_41B8_E5108E7E9907",
      "useHandCursor": true,
      "areas": [
       {
        "click": "this.setCameraSameSpotAsMedia(this.camera_34AFDE07_3A0B_C89A_41C7_9CD6A163AA4A, this.panorama_35E8C518_39E2_4029_4194_054D3498BD1A); this.startPanoramaWithCamera(this.panorama_32860A97_39E3_C027_41BA_385D71D883FE, this.camera_34AFDE07_3A0B_C89A_41C7_9CD6A163AA4A); this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": []
     },
     {
      "angle": 0,
      "distance": 100,
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "id": "panorama_35E8C518_39E2_4029_4194_054D3498BD1A_tcap0",
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/panorama_35E8C518_39E2_4029_4194_054D3498BD1A_tcap0.png",
         "width": 505,
         "class": "ImageResourceLevel",
         "height": 505
        }
       ]
      },
      "inertia": true
     },
     {
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": 8.46,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_35E8C518_39E2_4029_4194_054D3498BD1A_0_HS_2_0.png",
           "width": 242,
           "class": "ImageResourceLevel",
           "height": 182
          }
         ]
        },
        "hfov": 19.97,
        "yaw": 19.19,
        "class": "HotspotPanoramaOverlayImage",
        "distance": 100
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_3756B259_39EC_66A4_41B0_7AB6E83A9520",
      "useHandCursor": true,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_36B2F184_39ED_E5AC_41B6_A55ABC77F827, {'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'borderColor':'#000000','pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconLineWidth':5,'rollOverIconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderSize':0,'rollOverIconLineWidth':5,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedIconHeight':20,'pressedIconColor':'#888888','paddingTop':5,'pressedBackgroundOpacity':0.3,'paddingRight':5,'pressedBorderSize':0,'backgroundOpacity':0.3,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5}, null, null, null, null, null, false)",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": []
     },
     {
      "popupMaxHeight": "50%",
      "popupDistance": 100,
      "pitch": 8.46,
      "rotationX": 0,
      "rotationZ": 0,
      "hideDuration": 500,
      "yaw": 19.19,
      "rotationY": 0,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_36B2F184_39ED_E5AC_41B6_A55ABC77F827_0_0.jpg",
         "width": 600,
         "class": "ImageResourceLevel",
         "height": 239
        },
        {
         "url": "media/popup_36B2F184_39ED_E5AC_41B6_A55ABC77F827_0_1.jpg",
         "width": 512,
         "class": "ImageResourceLevel",
         "height": 203
        }
       ]
      },
      "hfov": 19.97,
      "showDuration": 500,
      "popupMaxWidth": "50%",
      "class": "PopupPanoramaOverlay",
      "id": "popup_36B2F184_39ED_E5AC_41B6_A55ABC77F827",
      "showEasing": "cubic_in",
      "hideEasing": "cubic_out"
     },
     {
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": 8.32,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_35E8C518_39E2_4029_4194_054D3498BD1A_0_HS_3_0.png",
           "width": 231,
           "class": "ImageResourceLevel",
           "height": 199
          }
         ]
        },
        "hfov": 19.13,
        "yaw": -0.25,
        "class": "HotspotPanoramaOverlayImage",
        "distance": 100
       }
      ],
      "rollOverDisplay": false,
      "id": "overlay_353F2410_3A08_38B6_41C9_254D01C3E8E6",
      "useHandCursor": true,
      "areas": [
       {
        "click": "this.openLink('https://www.bhfitness.com/es', '_blank')",
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": []
     }
    ]
   }
  ]
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_35E8C518_39E2_4029_4194_054D3498BD1A_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_32241B57_39E2_4026_4183_26C6E4717B44",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_32241B57_39E2_4026_4183_26C6E4717B44_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_32DB6313_39E2_403F_41C2_EB4E92E5CFDD",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_32DB6313_39E2_403F_41C2_EB4E92E5CFDD_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_325C2B29_39E2_406B_4199_1C6BE6363C73",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_325C2B29_39E2_406B_4199_1C6BE6363C73_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_327682E0_39E3_C019_41B8_9D43DFC408DA",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_327682E0_39E3_C019_41B8_9D43DFC408DA_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_32860A97_39E3_C027_41BA_385D71D883FE",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_32860A97_39E3_C027_41BA_385D71D883FE_camera",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_35E8C518_39E2_4029_4194_054D3498BD1A_camera",
    "media": "this.panorama_35E8C518_39E2_4029_4194_054D3498BD1A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_32241B57_39E2_4026_4183_26C6E4717B44_camera",
    "media": "this.panorama_32241B57_39E2_4026_4183_26C6E4717B44",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_32DB6313_39E2_403F_41C2_EB4E92E5CFDD_camera",
    "media": "this.panorama_32DB6313_39E2_403F_41C2_EB4E92E5CFDD",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_325C2B29_39E2_406B_4199_1C6BE6363C73_camera",
    "media": "this.panorama_325C2B29_39E2_406B_4199_1C6BE6363C73",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_327682E0_39E3_C019_41B8_9D43DFC408DA_camera",
    "media": "this.panorama_327682E0_39E3_C019_41B8_9D43DFC408DA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)",
    "end": "this.trigger('tourEnded')",
    "media": "this.panorama_32860A97_39E3_C027_41BA_385D71D883FE",
    "camera": "this.panorama_32860A97_39E3_C027_41BA_385D71D883FE_camera"
   }
  ],
  "class": "PlayList"
 },
 "this.popup_36B2F184_39ED_E5AC_41B6_A55ABC77F827",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_2BDEAD59_3A0B_C8B7_41C5_A7013DC1CF11",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_2BEBCD62_3A0B_C89A_41A3_6BAEFDD2B84A",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_2BF50D76_3A0B_CB7A_4187_E1B3926C211D",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_28005D80_3A0B_CB96_4195_3FFD421BF68C",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_34990DCB_3A0B_CBAA_41C5_7850CFB600D5",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_349DFDDD_3A0B_CBAF_4162_2568B9FB4D9E",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_34A06DE4_3A0B_CB9E_41BE_998897405FDB",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_34A98DF8_3A0B_CB76_41C9_BFA962776344",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_34AFDE07_3A0B_C89A_41C7_9CD6A163AA4A",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_34B6AE11_3A0B_C8B6_41CA_B3403B099640",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_34C15E20_3A0B_C896_41C4_D02F2F19D34B",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_34CAFE2F_3A0B_C8EB_41BC_92BB8ED95947",
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 }
], "children": [
 {
  "toolTipOpacity": 1,
  "progressBarOpacity": 1,
  "toolTipPaddingBottom": 4,
  "borderSize": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "progressRight": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarRight": 0,
  "playbackBarBottom": 5,
  "progressBottom": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBorderColor": "#000000",
  "progressHeight": 10,
  "progressBorderSize": 0,
  "playbackBarLeft": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressLeft": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarBackgroundOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "playbackBarBorderSize": 0,
  "shadow": false,
  "progressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "minHeight": 50,
  "minWidth": 100,
  "toolTipPaddingRight": 6,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "playbackBarHeadHeight": 15,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadowColor": "#000000",
  "transitionDuration": 500,
  "progressBarBorderRadius": 0,
  "paddingLeft": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadShadow": true,
  "toolTipBorderSize": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipFontStyle": "normal",
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipBorderRadius": 3,
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowVerticalLength": 0,
  "paddingTop": 0,
  "toolTipFontColor": "#606060",
  "toolTipFontFamily": "Arial",
  "height": "100%",
  "borderRadius": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowColor": "#333333",
  "width": "100%",
  "progressBarBorderColor": "#000000",
  "toolTipFontWeight": "normal",
  "propagateClick": false,
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderSize": 0,
  "toolTipDisplayTime": 600,
  "toolTipPaddingLeft": 6,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBorderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeight": 10,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "id": "MainViewer",
  "playbackBarProgressBorderRadius": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipFontSize": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarOpacity": 1,
  "playbackBarHeadWidth": 6,
  "transitionMode": "blending",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 1
 },
 {
  "borderSize": 0,
  "backgroundColor": [
   "#000000"
  ],
  "right": 0,
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "paddingTop": 0,
  "propagateClick": false,
  "borderRadius": 0,
  "backgroundOpacity": 0.55,
  "backgroundColorRatios": [
   0
  ],
  "shadow": false,
  "top": 0,
  "minHeight": 0,
  "bottom": 0,
  "backgroundColorDirection": "vertical",
  "minWidth": 0,
  "paddingBottom": 0,
  "id": "veilPopupPanorama",
  "data": {
   "name": "UIComponent9987"
  },
  "paddingRight": 0,
  "visible": false,
  "class": "UIComponent",
  "left": 0,
  "paddingLeft": 0
 },
 {
  "borderSize": 0,
  "backgroundColor": [],
  "right": 0,
  "paddingTop": 0,
  "propagateClick": false,
  "borderRadius": 0,
  "backgroundOpacity": 1,
  "backgroundColorRatios": [],
  "scaleMode": "custom",
  "shadow": false,
  "top": 0,
  "minHeight": 0,
  "bottom": 0,
  "backgroundColorDirection": "vertical",
  "minWidth": 0,
  "paddingBottom": 0,
  "id": "zoomImagePopupPanorama",
  "data": {
   "name": "ZoomImage9988"
  },
  "paddingRight": 0,
  "visible": false,
  "class": "ZoomImage",
  "left": 0,
  "paddingLeft": 0
 },
 {
  "iconBeforeLabel": true,
  "textDecoration": "none",
  "iconLineWidth": 5,
  "borderSize": 0,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "fontColor": "#FFFFFF",
  "mode": "push",
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "paddingTop": 5,
  "fontFamily": "Arial",
  "propagateClick": false,
  "fontStyle": "normal",
  "right": 10,
  "shadowBlurRadius": 6,
  "borderRadius": 0,
  "backgroundOpacity": 0.3,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": false,
  "rollOverIconColor": "#666666",
  "top": 10,
  "fontWeight": "normal",
  "backgroundColorDirection": "vertical",
  "iconWidth": 20,
  "minHeight": 0,
  "minWidth": 0,
  "paddingBottom": 5,
  "id": "closeButtonPopupPanorama",
  "iconColor": "#000000",
  "gap": 5,
  "horizontalAlign": "center",
  "shadowSpread": 1,
  "paddingRight": 5,
  "layout": "horizontal",
  "cursor": "hand",
  "shadowColor": "#000000",
  "data": {
   "name": "CloseButton9989"
  },
  "pressedIconColor": "#888888",
  "verticalAlign": "middle",
  "label": "",
  "borderColor": "#000000",
  "fontSize": "1.29vh",
  "visible": false,
  "class": "CloseButton",
  "iconHeight": 20,
  "paddingLeft": 5
 }
], 
 "mouseWheelEnabled": true,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "height": "100%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "width": "100%",
 "scripts": {
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = result[1]; var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "unregisterKey": function(key){  delete window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getKey": function(key){  return window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = self.getPixels(w.get('titleFontSize')) + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); }
 },
 "propagateClick": false,
 "shadow": false,
 "gap": 10,
 "vrPolyfillScale": 0.5,
 "minHeight": 20,
 "minWidth": 20,
 "paddingBottom": 0,
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "creationPolicy": "delayed",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "layout": "absolute",
 "data": {
  "name": "Player856"
 },
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "class": "Player",
 "scrollBarWidth": 10,
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "paddingLeft": 0
})