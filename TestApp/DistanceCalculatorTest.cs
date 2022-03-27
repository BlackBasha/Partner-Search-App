using Business.Concrete;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TestApp
{
    [TestClass]
    public class DistanceCalculatorTest
    {
        [TestMethod]
        public void ExpecedDistanceisTrue()
        {
           var result= DistanceCalculator.DistanceBetweenPlaces(51.5144636, -0.142571, 61.5144636, -0.142571);
            Assert.AreEqual(1111.9458151966548, result);
        }

    }
}
