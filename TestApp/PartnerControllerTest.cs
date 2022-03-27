using Business.Concrete;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;
namespace TestApp
{
    [TestClass]
    public class PartnerControllerTest
    {
        private static WebApplicationFactory<InvitationApi.Startup> _factory;

        [ClassInitialize]
        public static void ClassInit(TestContext testContext)
        {
            _factory = new WebApplicationFactory<InvitationApi.Startup>();
        }


        [TestMethod]
        public async Task ShouldReturnSuccessResponse()
        {
            var partnerFilter =new  Entities.Dtos.PartnerFilterDto{ StartLon=1, StartLat =1, Distance=30000 };
            var json = Newtonsoft.Json.JsonConvert.SerializeObject(partnerFilter);
            var data = new System.Net.Http.StringContent(json, System.Text.Encoding.UTF8, "application/json");
            var client = _factory.CreateClient();
            var response = await client.PostAsync("api/Partner/search", data);

            Assert.AreEqual(System.Net.HttpStatusCode.OK, response.StatusCode);
            Assert.AreEqual("application/json; charset=utf-8", response.Content.Headers.ContentType?.ToString());

        }

    }
}
