using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Faker;

namespace ReactCsvPeople.Data
{
    public class PeopleRepository
    {
        private readonly string _connectionString;
        public PeopleRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Person> GetAllPeople()
        {
            var ctx = new PeopleContext(_connectionString);
            return ctx.People.ToList();
        }
        public void AddPeople(List<Person> people)
        {
            var ctx = new PeopleContext(_connectionString);
            ctx.People.AddRange(people);
            ctx.SaveChanges();
        }
        public void DeleteAll()
        {
            var ctx = new PeopleContext(_connectionString);
            ctx.Database.ExecuteSqlRaw("delete from People");
            ctx.SaveChanges();
        }
    }
}
