import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { SearchComponent } from './search/search.component';
import { EnglishComponent } from './english/english.component';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BagComponent } from './bag/bag.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriesComponent } from './men/categories/categories.component';
import { AccessoriesComponent } from './men/categories/accessories/accessories.component';
import { BeltsComponent } from './men/categories/accessories/belts/belts.component';
import { BlanketsComponent } from './men/categories/accessories/blankets/blankets.component';
import { EyewearComponent } from './men/categories/accessories/eyewear/eyewear.component';
import { GlovesComponent } from './men/categories/accessories/gloves/gloves.component';
import { HatsComponent } from './men/categories/accessories/hats/hats.component';
import { JewelryComponent } from './men/categories/accessories/jewelry/jewelry.component';
import { KeychainsComponent } from './men/categories/accessories/keychains/keychains.component';
import { PocketComponent } from './men/categories/accessories/pocket/pocket.component';
import { ScarvesComponent } from './men/categories/accessories/scarves/scarves.component';
import { SocksComponent } from './men/categories/accessories/socks/socks.component';
import { TechComponent } from './men/categories/accessories/tech/tech.component';
import { TiesComponent } from './men/categories/accessories/ties/ties.component';
import { TowelsComponent } from './men/categories/accessories/towels/towels.component';
import { UmbrellasComponent } from './men/categories/accessories/umbrellas/umbrellas.component';
import { WalletsComponent } from './men/categories/accessories/wallets/wallets.component';
import { WatchesComponent } from './men/categories/accessories/watches/watches.component';
import { BagsComponent } from './men/categories/bags/bags.component';
import { BackpacksComponent } from './men/categories/bags/backpacks/backpacks.component';
import { BriefcasesComponent } from './men/categories/bags/briefcases/briefcases.component';
import { DuffleComponent } from './men/categories/bags/duffle/duffle.component';
import { MessengerComponent } from './men/categories/bags/messenger/messenger.component';
import { PouchesComponent } from './men/categories/bags/pouches/pouches.component';
import { ToteComponent } from './men/categories/bags/tote/tote.component';
import { TravelComponent } from './men/categories/bags/travel/travel.component';
import { HomeComponent } from './home/home.component';
import { JacketsComponent } from './men/categories/clothing/jackets/jackets.component';
import { JeansComponent } from './men/categories/clothing/jeans/jeans.component';
import { PantsComponent } from './men/categories/clothing/pants/pants.component';
import { ShirtsComponent } from './men/categories/clothing/shirts/shirts.component';
import { ShortsComponent } from './men/categories/clothing/shorts/shorts.component';
import { SuitsComponent } from './men/categories/clothing/suits/suits.component';
import { SweatersComponent } from './men/categories/clothing/sweaters/sweaters.component';
import { SwimwearComponent } from './men/categories/clothing/swimwear/swimwear.component';
import { TopsComponent } from './men/categories/clothing/tops/tops.component';
import { UnderwearComponent } from './men/categories/clothing/underwear/underwear.component';
import { ClothingComponent } from './men/categories/clothing/clothing.component';
import { ShoesComponent } from './men/categories/shoes/shoes.component';
import { BoatComponent } from './men/categories/shoes/boat/boat.component';
import { BootsComponent } from './men/categories/shoes/boots/boots.component';
import { EspadrillesComponent } from './men/categories/shoes/espadrilles/espadrilles.component';
import { LaceComponent } from './men/categories/shoes/lace/lace.component';
import { LoafersComponent } from './men/categories/shoes/loafers/loafers.component';
import { MonkstrapsComponent } from './men/categories/shoes/monkstraps/monkstraps.component';
import { SandalsComponent } from './men/categories/shoes/sandals/sandals.component';
import { SneakersComponent } from './men/categories/shoes/sneakers/sneakers.component';
import { AccountComponent } from './account/account.component';
import { EmailComponent } from './email/email.component';
import { OrderComponent } from './order/order.component';
import { AddressesComponent } from './addresses/addresses.component';
import { DetailsComponent } from './men/categories/details/details.component';
import { GlassesComponent } from './men/categories/accessories/eyewear/glasses/glasses.component';
import { SunglassesComponent } from './men/categories/accessories/eyewear/sunglasses/sunglasses.component';
import { BeaniesComponent } from './men/categories/accessories/hats/beanies/beanies.component';
import { CapsComponent } from './men/categories/accessories/hats/caps/caps.component';
import { StructuredHatsComponent } from './men/categories/accessories/hats/structured-hats/structured-hats.component';
import { BraceletsComponent } from './men/categories/accessories/jewelry/bracelets/bracelets.component';
import { CufflinksComponent } from './men/categories/accessories/jewelry/cufflinks/cufflinks.component';
import { EarringsComponent } from './men/categories/accessories/jewelry/earrings/earrings.component';
import { NecklacesComponent } from './men/categories/accessories/jewelry/necklaces/necklaces.component';
import { PinsComponent } from './men/categories/accessories/jewelry/pins/pins.component';
import { RingsComponent } from './men/categories/accessories/jewelry/rings/rings.component';
import { HeadphonesComponent } from './men/categories/accessories/tech/headphones/headphones.component';
import { IphoneCasesComponent } from './men/categories/accessories/tech/iphone-cases/iphone-cases.component';
import { BowComponent } from './men/categories/accessories/ties/bow/bow.component';
import { NeckComponent } from './men/categories/accessories/ties/neck/neck.component';
import { CardHoldersComponent } from './men/categories/accessories/wallets/card-holders/card-holders.component';
import { MoneyClipsComponent } from './men/categories/accessories/wallets/money-clips/money-clips.component';
import { PassportHoldersComponent } from './men/categories/accessories/wallets/passport-holders/passport-holders.component';
import { BombersComponent } from './men/categories/clothing/jackets/bombers/bombers.component';
import { CoatsComponent } from './men/categories/clothing/jackets/coats/coats.component';
import { DenimJacketsComponent } from './men/categories/clothing/jackets/denim-jackets/denim-jackets.component';
import { DownComponent } from './men/categories/clothing/jackets/down/down.component';
import { FurComponent } from './men/categories/clothing/jackets/fur/fur.component';
import { JacketsCoatsComponent } from './men/categories/clothing/jackets/jackets-coats/jackets-coats.component';
import { LeatherJacketsComponent } from './men/categories/clothing/jackets/leather-jackets/leather-jackets.component';
import { PeacoatsComponent } from './men/categories/clothing/jackets/peacoats/peacoats.component';
import { TrenchCoatsComponent } from './men/categories/clothing/jackets/trench-coats/trench-coats.component';
import { VestsComponent } from './men/categories/clothing/jackets/vests/vests.component';
import { CargoPantsComponent } from './men/categories/clothing/pants/cargo-pants/cargo-pants.component';
import { LeatherPantsComponent } from './men/categories/clothing/pants/leather-pants/leather-pants.component';
import { SweatpantsComponent } from './men/categories/clothing/pants/sweatpants/sweatpants.component';
import { TrousersComponent } from './men/categories/clothing/pants/trousers/trousers.component';
import { BlazersComponent } from './men/categories/clothing/suits/blazers/blazers.component';
import { SuitsBlazersComponent } from './men/categories/clothing/suits/suits-blazers/suits-blazers.component';
import { TuxedosComponent } from './men/categories/clothing/suits/tuxedos/tuxedos.component';
import { WaistcoatsComponent } from './men/categories/clothing/suits/waistcoats/waistcoats.component';
import { CardigansComponent } from './men/categories/clothing/sweaters/cardigans/cardigans.component';
import { CrewnecksComponent } from './men/categories/clothing/sweaters/crewnecks/crewnecks.component';
import { HoodiesComponent } from './men/categories/clothing/sweaters/hoodies/hoodies.component';
import { SweatshirtsComponent } from './men/categories/clothing/sweaters/sweatshirts/sweatshirts.component';
import { TurtlenecksComponent } from './men/categories/clothing/sweaters/turtlenecks/turtlenecks.component';
import { VNecksComponent } from './men/categories/clothing/sweaters/v-necks/v-necks.component';
import { SwimsuitsComponent } from './men/categories/clothing/swimwear/swimsuits/swimsuits.component';
import { HenleysComponent } from './men/categories/clothing/tops/henleys/henleys.component';
import { PolosComponent } from './men/categories/clothing/tops/polos/polos.component';
import { TShirtsComponent } from './men/categories/clothing/tops/t-shirts/t-shirts.component';
import { TankTopsComponent } from './men/categories/clothing/tops/tank-tops/tank-tops.component';
import { BoxersComponent } from './men/categories/clothing/underwear/boxers/boxers.component';
import { BriefsComponent } from './men/categories/clothing/underwear/briefs/briefs.component';
import { PyjamasComponent } from './men/categories/clothing/underwear/pyjamas/pyjamas.component';
import { RobesComponent } from './men/categories/clothing/underwear/robes/robes.component';
import { BikerComponent } from './men/categories/shoes/boots/biker/biker.component';
import { ChelseaComponent } from './men/categories/shoes/boots/chelsea/chelsea.component';
import { DesertComponent } from './men/categories/shoes/boots/desert/desert.component';
import { LaceUpComponent } from './men/categories/shoes/boots/lace-up/lace-up.component';
import { WingtipComponent } from './men/categories/shoes/boots/wingtip/wingtip.component';
import { ZipupComponent } from './men/categories/shoes/boots/zipup/zipup.component';
import { FlipFlopsComponent } from './men/categories/shoes/sandals/flip-flops/flip-flops.component';
import { HighTopSneakersComponent } from './men/categories/shoes/sneakers/high-top-sneakers/high-top-sneakers.component';
import { LowTopSneakersComponent } from './men/categories/shoes/sneakers/low-top-sneakers/low-top-sneakers.component';
import { FooterComponent } from './footer/footer.component';
import { CustomercareComponent } from './footer/customercare/customercare.component';
import { CareersComponent } from './footer/careers/careers.component';
import { AffiliatesComponent } from './footer/affiliates/affiliates.component';
import { SitemapComponent } from './footer/sitemap/sitemap.component';
import { ViewallComponent } from './footer/viewall/viewall.component';
import { PrivacyComponent } from './footer/privacy/privacy.component';
import { TermsComponent } from './footer/terms/terms.component';
import { MontrealComponent } from './footer/montreal/montreal.component';
import { ProductinformationComponent } from './footer/customercare/productinformation/productinformation.component';
import { PaymentinformationComponent } from './footer/customercare/paymentinformation/paymentinformation.component';
import { YourorderComponent } from './footer/customercare/yourorder/yourorder.component';
import { ShippingComponent } from './footer/customercare/shipping/shipping.component';
import { ReturnpolicyComponent } from './footer/customercare/returnpolicy/returnpolicy.component';
import { CouponsComponent } from './footer/customercare/coupons/coupons.component';
import { PriceprotectionPolicyComponent } from './footer/customercare/priceprotection-policy/priceprotection-policy.component';
import { CorporateComponent } from './footer/customercare/corporate/corporate.component';
import { ManagingComponent } from './footer/customercare/managing/managing.component';
import { ContactComponent } from './footer/customercare/contact/contact.component';
import { MastheadComponent } from './footer/customercare/masthead/masthead.component';
import { AccessibilityComponent } from './footer/customercare/accessibility/accessibility.component';
import { HelpComponent } from './footer/customercare/help/help.component';
import { EditorialComponent } from './footer/editorial/editorial.component';
import { ArtComponent } from './footer/editorial/art/art.component';
import { CultureComponent } from './footer/editorial/culture/culture.component';
import { FashionComponent } from './footer/editorial/fashion/fashion.component';
import { MarketComponent } from './footer/editorial/market/market.component';
import { MusicComponent } from './footer/editorial/music/music.component';
import { ProductCurationComponent } from './footer/editorial/product-curation/product-curation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenComponent,
    WomenComponent,
    SearchComponent,
    EnglishComponent,
    LoginComponent,
    WishlistComponent,
    BagComponent,
    CategoriesComponent,
    AccessoriesComponent,
    BeltsComponent,
    BlanketsComponent,
    EyewearComponent,
    GlovesComponent,
    HatsComponent,
    JewelryComponent,
    KeychainsComponent,
    PocketComponent,
    ScarvesComponent,
    SocksComponent,
    TechComponent,
    TiesComponent,
    TowelsComponent,
    UmbrellasComponent,
    WalletsComponent,
    WatchesComponent,
    BagsComponent,
    BackpacksComponent,
    BriefcasesComponent,
    DuffleComponent,
    MessengerComponent,
    PouchesComponent,
    ToteComponent,
    TravelComponent,
    HomeComponent,
    JacketsComponent,
    JeansComponent,
    PantsComponent,
    ShirtsComponent,
    ShortsComponent,
    SuitsComponent,
    SweatersComponent,
    SwimwearComponent,
    TopsComponent,
    UnderwearComponent,
    ClothingComponent,
    ShoesComponent,
    BoatComponent,
    BootsComponent,
    EspadrillesComponent,
    LaceComponent,
    LoafersComponent,
    MonkstrapsComponent,
    SandalsComponent,
    SneakersComponent,
    AccountComponent,
    EmailComponent,
    OrderComponent,
    AddressesComponent,
    DetailsComponent,
    GlassesComponent,
    SunglassesComponent,
    BeaniesComponent,
    CapsComponent,
    StructuredHatsComponent,
    BraceletsComponent,
    CufflinksComponent,
    EarringsComponent,
    NecklacesComponent,
    PinsComponent,
    RingsComponent,
    HeadphonesComponent,
    IphoneCasesComponent,
    BowComponent,
    NeckComponent,
    CardHoldersComponent,
    MoneyClipsComponent,
    PassportHoldersComponent,
    BombersComponent,
    CoatsComponent,
    DenimJacketsComponent,
    DownComponent,
    FurComponent,
    JacketsCoatsComponent,
    LeatherJacketsComponent,
    PeacoatsComponent,
    TrenchCoatsComponent,
    VestsComponent,
    CargoPantsComponent,
    LeatherPantsComponent,
    SweatpantsComponent,
    TrousersComponent,
    BlazersComponent,
    SuitsBlazersComponent,
    TuxedosComponent,
    WaistcoatsComponent,
    CardigansComponent,
    CrewnecksComponent,
    HoodiesComponent,
    SweatshirtsComponent,
    TurtlenecksComponent,
    VNecksComponent,
    SwimsuitsComponent,
    HenleysComponent,
    PolosComponent,
    TShirtsComponent,
    TankTopsComponent,
    BoxersComponent,
    BriefsComponent,
    PyjamasComponent,
    RobesComponent,
    BikerComponent,
    ChelseaComponent,
    DesertComponent,
    LaceUpComponent,
    WingtipComponent,
    ZipupComponent,
    FlipFlopsComponent,
    HighTopSneakersComponent,
    LowTopSneakersComponent,
    FooterComponent,
    CustomercareComponent,
    CareersComponent,
    AffiliatesComponent,
    SitemapComponent,
    ViewallComponent,
    PrivacyComponent,
    TermsComponent,
    MontrealComponent,
    ProductinformationComponent,
    PaymentinformationComponent,
    YourorderComponent,
    ShippingComponent,
    ReturnpolicyComponent,
    CouponsComponent,
    PriceprotectionPolicyComponent,
    CorporateComponent,
    ManagingComponent,
    ContactComponent,
    MastheadComponent,
    AccessibilityComponent,
    HelpComponent,
    EditorialComponent,
    ArtComponent,
    CultureComponent,
    FashionComponent,
    MarketComponent,
    MusicComponent,
    ProductCurationComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
